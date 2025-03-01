import { getUser } from './get-user'
import { addUser } from './add-user'
import { sessions } from './sessions'

export const server = {
    async logout(session) {
        sessions.remove(session)
    },
    async authorize(authLogin, authPassword) {
        // ищем пользователя с конкретным логином
        const user = await getUser(authLogin)

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
        const existedUser = await getUser(regLogin)

        // если пользователь найден, то ошибка
        if (existedUser) {
            return {
                error: 'Такой логин уже занят',
                res: null,
            }
        }

        // при регистрации добавляем пользователя в БД
        const user = await addUser(regLogin, regPassword)
        console.log(user);
        

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