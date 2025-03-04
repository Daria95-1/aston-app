declare module '@bff' {
    export { server } from '../bff/server'
    export { register } from '../bff/operation/register'
    export { authorize } from '../bff/operation/authorize'
    export { sessions } from '../bff/sessions'
    export { sessionTransform } from '../bff/transformers/session-transform'
    export { getUser } from '../bff/api/get-user'
    export { userTransform } from '../bff/transformers/user-transform'
    export { addBookToFavorites } from '../bff/operation/add-book-to-favorites'
    export { removeBookFromFavorites } from '../bff/operation/remove-book-from-favorites'
}
