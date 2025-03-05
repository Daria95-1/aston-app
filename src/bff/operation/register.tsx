import { addUser, getUser } from '@bff/api'
import { sessions } from '../sessions'

type RegisterResponse = {
    error: string | null
    res: {
        id: number
        login: string
        roleId: string
        session: string
    } | null
}

export const register = async (
    regLogin: string,
    regPassword: string
): Promise<RegisterResponse> => {
    const existedUser = await getUser(regLogin)

    if (existedUser) {
        return {
            error: 'Такой логин уже занят',
            res: null,
        }
    }

    const user = await addUser(regLogin, regPassword)

    const { id, login, roleId } = user

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
