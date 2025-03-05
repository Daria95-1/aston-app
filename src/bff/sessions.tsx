import { addSession, deleteSession, getSession } from '@bff/api'
import { User } from './transformers/user-transform'
import { Session } from './transformers/session-transform'

export const sessions = {
    create(user: User): string {
        const hash = Math.random().toFixed(50)
        addSession(hash, user) // Добавляем сессию
        return hash
    },

    // Удаляем сессию по хешу
    async remove(hash: string): Promise<void> {
        const session: Session | null = await getSession(hash) // Получаем сессию

        if (!session) {
            return
        }

        deleteSession(session.id.toString()) // Удаляем сессию
    },

    // Проверяем доступ по роли
    async access(hash: string, accessRole: number[]): Promise<boolean> {
        const dbSession: Session | null = await getSession(hash)

        return (
            Boolean(dbSession?.user) &&
            accessRole.includes(dbSession?.user?.roleId)
        )
    },
}
