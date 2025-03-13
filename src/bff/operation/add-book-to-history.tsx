import { AppDispatch } from '../../store'
import { addToHistory } from '@slices/user-slice'
import { Book } from '@slices/books-slice'

type AddBookToHistoryResponse = {
    error?: string
    res: { payload: Book; type: string }
}

export const addBookToHistory = async (
    dispatch: AppDispatch,
    book: Book
): Promise<AddBookToHistoryResponse> => {
    try {
        const res = dispatch(addToHistory(book))
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