import { getUser } from './get-user'
import { addUser } from './add-user'
import { sessions } from './sessions'
// import { createSession } from './create-session'

export const server = {
    async authorize(authLogin, authPassword) {
        // ищем пользователя с конкретным логином
        const user = getUser(authLogin)

        // если пользователь не найден, то ошибка
        if (!user) {
            return {
                error: 'Такой пользователь не найден',
                res: null,
            }
        }

        // если пользователь найден, проверяем совпадение пароля
        if (authPassword !== user.password) {
            return {
                error: 'Неверный пароль',
                res: null,
            }
        }

        // если пользователь найден и пароль совпадает, он получает больше прав
        return {
            error: null,
            res: {
                id: user.id,
                login: user.login,
                roleId: user.role_id,
                session: sessions.create(user),
            },
        }
    },
    async register(regLogin, regPassword) {
        // проверяем, что логин не занят
        const user = getUser(regLogin)

        // если пользователь найден, то ошибка
        if (user) {
            return {
                error: 'Такой логин уже занят',
                res: null,
            }
        }

        // при регистрации добавляем пользователя в БД
        await addUser(regLogin, regPassword)

        // если пользователь зарегистировался, авторизовываем его сразу
        return {
            error: null,
            res: {
                id: user.id,
                login: user.login,
                roleId: user.role_id,
                session: sessions.create(user),
            },
        }
    }
}