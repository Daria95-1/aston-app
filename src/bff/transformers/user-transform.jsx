export const userTransform = (dbUser) => ({
    id: dbUser.id,
    login: dbUser.login,
    password: dbUser.password,
    roleId: dbUser.role_id,
})
