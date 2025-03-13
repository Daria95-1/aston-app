import { FavoriteItem } from '@slices/user-slice'

export const removeDuplicates = (favorites: FavoriteItem[]) => {
    const seen = new Map()
    return favorites.filter((book) => {
        const normalizedKey = book.key.trim().toLowerCase()

        if (seen.has(normalizedKey)) {
            return false
        }

        seen.set(normalizedKey, book)
        return true
    })
}


