import { Suspense } from 'react'
import { useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { Header, Footer, ErrorBoundaryWrapper } from '@components'
import { ROUTES, STORAGE_KEYS } from '@constants'
import { setUser, setFavorites } from '@slices/user-slice'
import {
    Authorization,
    Registration,
    MainPage,
    Favorites,
    ErrorPage,
    ItemPage,
    History
} from '@routes/lazy-routes' // lazy + Suspense

function App() {
    const dispatch = useDispatch()

    useLayoutEffect(() => {
        const currentUserDataJSON = sessionStorage.getItem(
            `${STORAGE_KEYS.USER_DATA}`
        )

        if (!currentUserDataJSON) {
            return
        }

        const currentUserData = JSON.parse(currentUserDataJSON)

        dispatch(
            setUser({
                ...currentUserData,
                roleId: Number(currentUserData.roleId),
            })
        )

        const savedFavorites = sessionStorage.getItem(
            STORAGE_KEYS.FAVOTITES_DATA
        )
        
        if (savedFavorites) {
            dispatch(setFavorites(JSON.parse(savedFavorites)))
        }
    }, [dispatch])

    return (
        <>
            <Header />
            <Suspense fallback={<div className="loader"></div>}>
                <div className="mt-30 mb-30">
                    <ErrorBoundaryWrapper>
                        <Routes>
                            <Route
                                path={ROUTES.REGISTER}
                                element={<Registration />}
                            />
                            <Route
                                path={ROUTES.LOGIN}
                                element={<Authorization />}
                            />
                            <Route
                                path={ROUTES.MAIN_PAGE}
                                element={<MainPage />}
                            />
                            <Route
                                path={ROUTES.FAVORITES}
                                element={<Favorites />}
                            />
                            <Route
                                path={ROUTES.NOT_FOUND}
                                element={<ErrorPage />}
                            />
                        </Routes>
                    </ErrorBoundaryWrapper>
                </div>
            </Suspense>
            <Footer />
        </>
    )
}

export default App
