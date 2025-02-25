import { ROLE } from '@constants/role'
import { addBookToFavorites, logout } from './session'

export const createSession = (roleId) => {
    const session = {}

    switch (roleId) {
        case ROLE.USER: {
            // может разлогиниться
            session.logout = logout;
            // может добавить книгу в избранное
            session.addBookToFavorites = addBookToFavorites; 
            break
        }
        case ROLE.GUEST: {
            // может только смотреть книги
            break
        }
        default:
            //ничего не делаем
    }

    return session
}