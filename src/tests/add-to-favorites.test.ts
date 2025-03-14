import { describe, it, vi, expect } from 'vitest'
import { addToFavorites } from '@slices/user-slice'

vi.mock('@services/favorites', () => ({
    addBookToFavorites: vi.fn(),
}))

vi.mock('@slices/user-slice', () => ({
    addToFavorites: vi.fn(),
    setFavorites: vi.fn(),
}))

type FavoriteItem = {
    key: string
    title: string
    author_name: string[]
    cover_edition_key: string
}

describe('addToFavorites', () => {
    const initialState = {
        user: {
            favorites: [] as FavoriteItem[],
        },
    }

    it('should add a book to favorites if it is not already favorite', () => {
        const dispatch = vi.fn()
        const book: FavoriteItem = {
            key: '123',
            title: 'Test Book',
            author_name: ['Test Author'],
            cover_edition_key: 'cover123',
        }

        expect(initialState.user.favorites).not.toContain(book)

        dispatch(addToFavorites(book))

        expect(dispatch).toHaveBeenCalledWith(addToFavorites(book))
    })
})
