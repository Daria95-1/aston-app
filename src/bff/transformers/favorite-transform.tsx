import { FavoriteItem } from '@slices/user-slice'

export const favoriteTransform = (
    favoriteItem: FavoriteItem
): FavoriteItem => {
    return {
        key: favoriteItem.key,
        title: favoriteItem.title,
        author_name: favoriteItem.author_name,
        cover_edition_key: favoriteItem.cover_edition_key,
    }
}
