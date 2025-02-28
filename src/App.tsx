import { Routes, Route } from 'react-router-dom'
import { Header, Footer } from '@components'
import { ROUTES } from '@constants'
import { Authorization, MainPage } from '@pages'

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path={ROUTES.MAIN_PAGE} element={<MainPage />} />
                <Route
                    path={ROUTES.REGISTER}
                    element={<div>Регистрация</div>}
                />
                <Route path={ROUTES.LOGIN} element={<Authorization />} />
                <Route path={ROUTES.NOT_FOUND} element={<div>Ошибка</div>} />
            </Routes>
            <Footer />
        </>
    )
}

export default App;
