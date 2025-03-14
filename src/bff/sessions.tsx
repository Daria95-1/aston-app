import { addSession, deleteSession, getSession } from '@bff/api'
import { User } from './transformers/user-transform'
import { Session } from './transformers/session-transform'

export const sessions = {
    create(user: User): string {
        const hash = Math.random().toFixed(50)
        addSession(hash, user)
        return hash
    },

    async remove(hash: string): Promise<void> {
        const session: Session | null = await getSession(hash)

        if (!session) {
            return
        }

        deleteSession(session.id.toString()) // Удаляем сессию
    },

    async access(hash: string, accessRole: number[]): Promise<boolean> {
        const dbSession: Session | null = await getSession(hash)

        if (!dbSession?.user || typeof dbSession.user.roleId !== 'number') {
            return false
        }

        return (
            Boolean(dbSession?.user) &&
            accessRole.includes(dbSession?.user?.roleId)
        )
    },
}
