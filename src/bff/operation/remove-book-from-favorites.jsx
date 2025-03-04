import { deleteFromFavorites } from '@slices/user-slice'

export const removeBookFromFavorites = async (dispatch, bookId) => {
    return {
        error: null,
        res: dispatch(deleteFromFavorites(bookId)),
    }
}
