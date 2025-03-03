import { ROUTES, USERS } from '@constants'
import { userTransform } from '@bff'

export const getUser = async (loginToFind) =>
    fetch(`${ROUTES.BASE_URL}/${USERS.USERS}?login=${loginToFind}`)
        .then((loadedUser) => loadedUser.json())
        .then(([loadedUser]) => loadedUser && userTransform(loadedUser))

