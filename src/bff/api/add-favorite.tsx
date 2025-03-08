import { ROUTES, FAVORITES } from '@constants'
import { Book } from '@slices/books-slice';

// Добавляем книгу в избранное на сервере
export const addFavorite = async (
    book: Book,
    userLogin: string
): Promise<Response> => {
    const response = await fetch(`${ROUTES.BASE_URL}/${FAVORITES.FAVORITES}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
            userLogin,
            key: book.key,
            title: book.title,
            author_name: book.author_name,
            cover_edition_key: book.cover_edition_key,
        }),
    })

    if (!response.ok) {
        throw new Error('Ошибка при добавлении книги в избранное')
    }

    return response
}
