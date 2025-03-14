import { Middleware } from '@reduxjs/toolkit'
import {
    addToFavorites,
    deleteFromFavorites,
    setFavorites,
    User,
    FavoriteItem,
} from '@slices/user-slice'
import { removeDuplicates } from '@utils/remove-duplicates'
import { RootState } from '../store'
import { favoriteTransform } from '@bff/transformers'
import { getUpdateFavorites, getUserData } from '@bff/api'

export const favoritesMiddleware: Middleware =
    (store) => (next) => async (action) => {
        const state = store.getState() as RootState
        const user = state.user as User
        const userId = user.id

        if (!userId) {
            return next(action)
        }

        const userIdString = userId.toString()

        if (addToFavorites.match(action)) {
            try {
                // Преобразуем новую книгу в избранное
                const newFavorite = favoriteTransform(action.payload)

                // Получаем данные пользователя с сервера
                const userData = await getUserData(userIdString)

                // Проверяем, есть ли уже книга в избранном
                const exists = userData.favorites.some(
                    (book: FavoriteItem) =>
                        book.key.trim().toLowerCase() ===
                        newFavorite.key.trim().toLowerCase()
                )

                if (exists) {
                    console.warn('Книга уже в избранном, не добавляем')
                    return next(action) // Выходим, если книга уже есть в избранном
                }

                // Обновляем список избранных книг, удаляя дубликаты
                const updatedFavorites = removeDuplicates([
                    ...userData.favorites,
                    newFavorite,
                ])

                // Отправляем обновленные данные на сервер
                await getUpdateFavorites(userIdString, updatedFavorites)

                // Обновляем состояние в Redux
                store.dispatch(setFavorites(updatedFavorites))

            } catch (error) {
                console.error('Ошибка при добавлении в избранное:', error)
            }

            return next(action)
        }

        if (deleteFromFavorites.match(action)) {
            try {
                const bookKey = action.payload
                const userData = await getUserData(userIdString)

                // Обновляем список избранных, удаляя книгу
                const updatedFavorites = userData.favorites.filter(
                    (book: FavoriteItem) => book.key !== bookKey
                )

                await getUpdateFavorites(userIdString, updatedFavorites)

                // Обновляем состояние в Redux
                store.dispatch(setFavorites(updatedFavorites))

                // Сохраняем обновленный список избранных в sessionStorage
                sessionStorage.setItem(
                    'favorites', // или используйте какой-то ключ, если нужно
                    JSON.stringify(updatedFavorites)
                )
            } catch (error) {
                console.error('Ошибка при удалении из избранного:', error)
            }

            return next(action)
        }

        return next(action)
    }
