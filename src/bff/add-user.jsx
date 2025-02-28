import { ROUTES, USERS } from '@constants'

export const addUser = (login, password) =>
    fetch(`${ROUTES.BASE_URL}/${USERS.USER}`, {
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