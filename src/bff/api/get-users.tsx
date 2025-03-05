import { ROUTES, USERS } from '@constants'
import { User } from '../transformers/user-transform'

export const getUsers = async (): Promise<User[]> => {
    const response = await fetch(`${ROUTES.BASE_URL}/${USERS.USERS}`)
    if (!response.ok) {
        throw new Error('Ошибка при загрузке пользователей')
    }
    return response.json()
}