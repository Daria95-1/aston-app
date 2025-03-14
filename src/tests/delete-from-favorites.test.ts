import { describe, it, vi, expect } from 'vitest'
import { deleteFromFavorites } from '@slices/user-slice'

vi.mock('@services/favorites', () => ({
    removeBookFromFavorites: vi.fn(),
}))

vi.mock('@slices/user-slice', () => ({
    deleteFromFavorites: vi.fn(),
    setFavorites: vi.fn(),
}))

type FavoriteItem = {
    key: string
    title: string
    author_name: string[]
    cover_edition_key: string
}

describe('deleteFromFavorites', () => {
    const initialState = {
        user: {
            favorites: [] as FavoriteItem[],
        },
    }

    it('should remove a book from favorites if it is already favorite', () => {
        const dispatch = vi.fn()
        const book: FavoriteItem = {
            key: '123',
            title: 'Test Book',
            author_name: ['Test Author'],
            cover_edition_key: 'cover123',
        }

        initialState.user.favorites = [book]

        dispatch(deleteFromFavorites(book.key))

        expect(dispatch).toHaveBeenCalledWith(deleteFromFavorites(book.key))
    })
})
