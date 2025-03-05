import { User } from './user-transform'

export type Session = {
    id: number
    hash: string
    user: User
}

export type DbSession = {
    id: number
    hash: string
    user: User
}

export const sessionTransform = (dbSession: DbSession): Session => ({
    id: dbSession.id,
    hash: dbSession.hash,
    user: dbSession.user,
})
