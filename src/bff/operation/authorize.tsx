import { getUser } from '@bff/api'
import { sessions } from '../sessions'

type AuthorizeResponse = {
    error: string | null
    res: {
        id?: number
        login?: string
        roleId?: string
        session?: string
    } | null
}

export const authorize = async (
    authLogin: string,
    authPassword: string
): Promise<AuthorizeResponse> => {
    const user = await getUser(authLogin)

    if (!user) {
        return {
            error: 'Такой пользователь не найден',
            res: null,
        }
    }

    const { id, login, password, roleId } = user

    if (authPassword !== password) {
        return {
            error: 'Неверный пароль',
            res: null,
        }
    }

    return {
        error: null,
        res: {
            id,
            login,
            roleId,
            session: sessions.create(user),
        },
    }
}
