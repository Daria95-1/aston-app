import { ROUTES, ROLES } from '@constants'

// получаем роли из БД
export const getRoles = () =>
    fetch(`${ROUTES.BASE_URL}/${ROLES.ROLES}`).then((loadedRoles) =>
        loadedRoles.json()
    )
