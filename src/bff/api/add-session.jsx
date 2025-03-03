import { ROUTES, SESSIONS } from '@constants'

export const addSession = (hash, user) =>
    fetch(`${ROUTES.BASE_URL}/${SESSIONS.SESSIONS}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
            hash,
            user: user,
        }),
    })
