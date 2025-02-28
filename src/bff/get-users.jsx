import { ROUTES, USERS } from '@constants'

// получаем пользователей из БД
export const getUsers = () =>
    fetch(`${ROUTES.BASE_URL}/${USERS.USERS}`).then((loadedUsers) =>
        loadedUsers.json()
    )
