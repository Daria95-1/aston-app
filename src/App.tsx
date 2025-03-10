import { Suspense } from 'react'
import { useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { Header, Footer } from '@components'
import { setUser } from "@slices/user-slice";
import { ROUTES, STORAGE_KEYS } from '@constants'
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
    }, [dispatch])

    return (
        <>
            <Header />
            <Suspense fallback={<div className='loader'></div>}>
            <Routes>
                <Route path={ROUTES.REGISTER} element={<Registration />} />
                <Route path={ROUTES.LOGIN} element={<Authorization />} />
                <Route path={ROUTES.MAIN_PAGE} element={<MainPage />} />
                <Route path={ROUTES.ITEM_PAGE} element={<ItemPage />} />
                <Route path={ROUTES.FAVORITES} element={<Favorites />} />
                <Route path={ROUTES.HISTORY} element={<History />} />
                <Route path={ROUTES.NOT_FOUND} element={<ErrorPage />} />
            </Routes>
            </Suspense>
            <Footer />
        </>
    )
}

export default App
