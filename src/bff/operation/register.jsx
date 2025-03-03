import { addUser, getUser } from '@bff/api'
import { sessions } from '../sessions'

export const register = async (regLogin, regPassword) => {
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
    
     const { id, login, roleId } = user

    // если пользователь зарегистировался, авторизовываем его сразу
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
