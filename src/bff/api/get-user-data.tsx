import { ROUTES, USERS } from '@constants'

export const getUserData = async (userId: string) => {
    return fetch(`${ROUTES.BASE_URL}/${USERS.USERS}/${userId}`).then((response) => {
        if (!response.ok) {
            return Promise.reject('Failed to fetch user data')
        }
        return response.json()
    })
}