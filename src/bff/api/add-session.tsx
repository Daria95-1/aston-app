import { ROUTES, SESSIONS } from '@constants'
import { User } from '../transformers/user-transform'

export const addSession = async (
    hash: string,
    user: User
): Promise<Response> => {
    const response = await fetch(`${ROUTES.BASE_URL}/${SESSIONS.SESSIONS}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
            hash,
            user,
        }),
    })

    if (!response.ok) {
        throw new Error('Ошибка при добавлении сессии')
    }

    return response
}