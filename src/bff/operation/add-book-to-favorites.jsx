import { ROLE } from '@constants'
import { sessions } from '../sessions'

// TODO: доделать добавление в избранное
export const addBookToFavorites = async (userSession) => {
    const accessRole = [ROLE.USER]

    if (!sessions.access(userSession, accessRole)) {
        return {
            error: 'Доступ запрещен',
            res: null,
        }
    }
}