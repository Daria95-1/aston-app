import { ROUTES, USERS } from '@constants'

type CreatedUser = {
    id: number
    login: string
    password: string
    roleId: string
}

export const addUser = async (
    login: string,
    password: string
): Promise<CreatedUser> => {
    const response = await fetch(`${ROUTES.BASE_URL}/${USERS.USERS}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
            login,
            password,
            role_id: 1,
        }),
    })

    if (!response.ok) {
        throw new Error('Ошибка при создании пользователя')
    }

    return response.json()
}