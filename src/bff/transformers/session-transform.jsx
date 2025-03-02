export const sessionTransform = (dbSession) => ({
    id: dbSession.id,
    hash: dbSession.hash,
    user: dbSession.user,
})
