import { sessionTransform, Session } from '@bff/transformers'
import { ROUTES, SESSIONS } from '@constants'

export const getSession = async (hash: string): Promise<Session | null> => {
    const response = await fetch(
        `${ROUTES.BASE_URL}/${SESSIONS.SESSIONS}?hash=${hash}`
    )

    if (!response.ok) {
        console.error('Ошибка при загрузке сессии')
        return null
    }

    const data = await response.json()
    return data.length > 0 ? sessionTransform(data[0]) : null
}