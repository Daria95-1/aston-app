import { lazy } from 'react'

export const Authorization = lazy(() =>
    import('@pages/authorization/authorization').then((module) => ({
        default: module.Authorization,
    }))
)
export const Registration = lazy(() =>
    import('@pages/registration/registration').then((module) => ({
        default: module.Registration,
    }))
)
export const MainPage = lazy(() =>
    import('@pages/main-page/main-page').then((module) => ({
        default: module.MainPage,
    }))
)
export const Favorites = lazy(() =>
    import('@pages/favorites/favorites').then((module) => ({
        default: module.Favorites,
    }))
)
export const ErrorPage = lazy(() =>
    import('@pages/error-page/error-page').then((module) => ({
        default: module.ErrorPage,
    }))
)
