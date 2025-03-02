import { getUser } from '@bff/api'
import { sessions } from '../sessions'

export const authorize = async (authLogin, authPassword) => {
    // ищем пользователя с конкретным логином
    const user = await getUser(authLogin)

    // если пользователь не найден, то ошибка
    if (!user) {
        return {
            error: 'Такой пользователь не найден',
            res: null,
        }
    }

    const { id, login, password, roleId } = user

    // если пользователь найден, проверяем совпадение пароля
    if (authPassword !== password) {
        return {
            error: 'Неверный пароль',
            res: null,
        }
    }

    // если пользователь найден и пароль совпадает, он получает больше прав
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
