import { FavoriteItem } from '@slices/user-slice'
import { ROUTES } from '@constants'

export const getUpdateFavorites = async (
    userId: string,
    favorites: FavoriteItem[]
) => {
    return fetch(`${ROUTES.API_USERS}/${userId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
        },
        body: JSON.stringify({ favorites }),
    }).then((response) => {
        if (!response.ok) {
            return Promise.reject('Failed to update favorites')
        }
        return response.json()
    })
}
