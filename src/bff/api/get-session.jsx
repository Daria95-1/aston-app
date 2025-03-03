import { sessionTransform } from '@bff'
import { ROUTES, SESSIONS } from '@constants'

export const getSession = async (hash) =>
    fetch(`${ROUTES.BASE_URL}/${SESSIONS.SESSIONS}?hash=${hash}`)
        .then((loadedSession) => loadedSession.json())
        .then(
            ([loadedSession]) =>
                loadedSession && sessionTransform(loadedSession)
        )
