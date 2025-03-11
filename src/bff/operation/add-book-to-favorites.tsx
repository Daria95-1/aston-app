import { AppDispatch } from '../../store'
import { addToFavorites } from '@slices/user-slice'
import { Book } from '@slices/books-slice'

type AddBookToFavoritesResponse = {
    error?: string
    res: { payload: Book; type: string }
}

export const addBookToFavorites = async (
    dispatch: AppDispatch,
    book: Book,
): Promise<AddBookToFavoritesResponse> => {
    try {
        const res = dispatch(addToFavorites(book))
        return {
            error: undefined,
            res,
        }
    } catch (error) {
        return {
            error: error instanceof Error ? error.message : 'Unknown error',
            res: { payload: {} as Book, type: 'error' },
        }
    }
}