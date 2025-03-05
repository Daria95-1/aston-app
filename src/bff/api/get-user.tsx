import { ROUTES, USERS } from '@constants'
import { userTransform, User } from '@bff/transformers'

export const getUser = async (loginToFind: string): Promise<User | null> =>
    fetch(`${ROUTES.BASE_URL}/${USERS.USERS}?login=${loginToFind}`)
        .then((loadedUser) => loadedUser.json())
        .then(([loadedUser]) => loadedUser && userTransform(loadedUser))
