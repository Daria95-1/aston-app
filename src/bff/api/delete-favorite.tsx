import { getFavorite } from '@bff/api';
import { ROUTES, FAVORITES } from '@constants'
// import { Book } from '@slices/books-slice';

export const deleteFavorite = async (bookId: string): Promise<Response> => {
    const book = await getFavorite(bookId)
    if (!book) {
        throw new Error('Книга не найдена')
    }

    const response = await fetch(
        `${ROUTES.BASE_URL}/${FAVORITES.FAVORITES}/${bookId}`,
        {
            method: 'DELETE',
        }
    )

    if (!response.ok) {
        throw new Error('Ошибка при удалении книги из избранного')
    }

    return response
}
