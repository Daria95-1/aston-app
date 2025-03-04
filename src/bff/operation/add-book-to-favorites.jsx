import { addToFavorites } from '@slices/user-slice'

export const addBookToFavorites = async (dispatch, book) => {
    return {
        error: null,
        res: await dispatch(addToFavorites(book)),
    }
}
