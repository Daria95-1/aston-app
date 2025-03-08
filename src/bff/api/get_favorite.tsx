import { ROUTES, FAVORITES } from '@constants';
import { Book } from '@slices/books-slice';

export const getFavorite = async (bookId: string): Promise<Book | null> => {
    const response = await fetch(
        `${ROUTES.BASE_URL}/${FAVORITES.FAVORITES}/${bookId}`
    )

    if (!response.ok) {
        console.error('Ошибка при загрузке книги')
        return null
    }

    const data = await response.json()
    return data ? data : null
}