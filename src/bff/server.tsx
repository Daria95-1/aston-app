import { authorize, register } from '@bff/operation'

export const server: {
    authorize: typeof authorize
    register: typeof register
} = {
    authorize,
    register,
}