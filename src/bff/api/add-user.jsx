import { ROUTES, USERS } from '@constants'

export const addUser = (login, password) =>
    fetch(`${ROUTES.BASE_URL}/${USERS.USERS}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
            login,
            password,
            role_id: 1,
        }),
    }).then((createdUser) => createdUser.json())