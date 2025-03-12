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
    (store) => (next) => (action) => {
        const state = store.getState() as RootState
        const user = state.user as User
        const userId = user.id

        if (!userId) {
            return next(action)
        }

        const userIdString = userId.toString()

        if (addToFavorites.match(action)) {
            const newFavorite = action.payload
            let filteredFavorites: FavoriteItem[] = []

            getUserData(userIdString)
                .then((userData) => {
                    filteredFavorites = removeDuplicates([
                        ...userData.favorites,
                        favoriteTransform(newFavorite),
                    ])
                    return getUpdateFavorites(userIdString, filteredFavorites)
                })
                .then(() => {
                    store.dispatch(setFavorites(filteredFavorites))
                    return next(action)
                })
                .catch((error) => {
                    console.error('Error adding favorite:', error)
                })

            return
        }

        if (deleteFromFavorites.match(action)) {
            const bookKey = action.payload
            let updatedFavorites: FavoriteItem[] = []

            getUserData(userIdString)
                .then((userData) => {
                    updatedFavorites = removeDuplicates(
                        userData.favorites
                            .filter(
                                (book: FavoriteItem) => book.key !== bookKey
                            )
                            .map(favoriteTransform)
                    )
                    return getUpdateFavorites(userIdString, updatedFavorites)
                })
                .then(() => {
                    store.dispatch(setFavorites(updatedFavorites))
                    return next(action)
                })
                .catch((error) => {
                    console.error('Error removing favorite:', error)
                })

            return
        }

        return next(action)
    }
