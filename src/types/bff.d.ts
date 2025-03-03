declare module '@bff' {
    export { getUser } from '../bff/api/get-user'
    export { userTransform } from '../bff/transformers/user-transform'
    export { server } from '../bff/server'
    export { sessions } from '../bff/sessions'
    export { authorize } from '../bff/operation/authorize'
    export { register } from '../bff/operation/register'
    export { sessionTransform } from '../bff/transformers/session-transform'
    export { addBookToFavorites } from '../bff/operation/add-book-to-favorites'
}
