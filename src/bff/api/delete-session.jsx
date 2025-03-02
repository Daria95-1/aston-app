import { ROUTES, SESSIONS } from '@constants'

export const deleteSession = async (sessionId) =>
    fetch(`${ROUTES.BASE_URL}/${SESSIONS.SESSIONS}/${sessionId}`, {
        method: 'DELETE',
    })
