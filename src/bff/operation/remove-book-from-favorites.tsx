import { AppDispatch } from '../../store'
import { deleteFromFavorites } from '@slices/user-slice'

type RemoveBookFromFavoritesResponse = {
    error?: string
    res: ReturnType<typeof deleteFromFavorites> | null
}

export const removeBookFromFavorites = async (
    dispatch: AppDispatch,
    bookId: string
): Promise<RemoveBookFromFavoritesResponse> => {
    try {
        const res = dispatch(deleteFromFavorites(bookId))
        return {
            error: undefined,
            res,
        }
    } catch (error) {
        return {
            error: error instanceof Error ? error.message : 'Unknown error',
            res: null,
        }
    }
}
