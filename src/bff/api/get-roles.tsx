import { ROUTES, ROLES } from '@constants'

type Role = {
    id: number
    name: string
    description: string
}

export const getRoles = async (): Promise<Role[]> => {
    const response = await fetch(`${ROUTES.BASE_URL}/${ROLES.ROLES}`)

    if (!response.ok) {
        console.error('Ошибка при загрузке ролей')
        return []
    }

    const data: Role[] = await response.json()
    return data
}
