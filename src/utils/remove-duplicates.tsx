import { FavoriteItem } from '@slices/user-slice'

export const removeDuplicates = (favorites: FavoriteItem[]) => {
    const seen = new Set()
    return favorites.filter((book) => {
        const normalizedKey = book.key.trim().toLowerCase()
        const isDuplicate = seen.has(normalizedKey)
        seen.add(normalizedKey)
        return !isDuplicate
    })
}

