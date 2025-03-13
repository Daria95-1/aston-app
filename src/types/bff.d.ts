declare module '@bff' {
    export { server } from '../bff/server'
    export { register } from '../bff/operation/register'
    export { authorize } from '../bff/operation/authorize'
    export { sessions } from '../bff/sessions'
    export { sessionTransform } from '../bff/transformers/session-transform'
    export { addUser } from '../bff/api/add-user'
    export { getUser } from '../bff/api/get-user'
    export { addSession } from '../bff/api/add-session'
    export { deleteSession } from '../bff/api/delete-session'
    export { getSession } from '../bff/api/get-session'
    export { userTransform } from '../bff/transformers/user-transform'
    export { addBookToHistory } from '../bff/operation/add-book-to-history'
    export { favoriteTransform } from '../bff/transformers/favorite-transform'
    export { getUpdateFavorites } from '../bff/api'
    export { getUserData } from '../bff/api'
}
