import { AppDispatch } from '../../store'
import { addToFavorites } from '@slices/user-slice'
import { Book } from '@slices/books-slice'

type AddBookToFavoritesResponse = {
    error: string | null
    res: { payload: Book; type: string } | null
}

export const addBookToFavorites = async (
    dispatch: AppDispatch,
    book: Book
): Promise<AddBookToFavoritesResponse> => {
    try {
        const res = dispatch(addToFavorites(book))
        return {
            error: null,
            res,
        }
    } catch (error) {
        return {
            error: error instanceof Error ? error.message : 'Unknown error',
            res: null,
        }
    }
}