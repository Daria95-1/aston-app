import { Routes, Route } from 'react-router-dom'
import { Header } from '@components'
import { ROUTES } from '@constants/routes'
import './index.css'
import './App.css'

function App() {
    return (
        <>
            <Header />
            <div>
                <Routes>
                    <Route
                        path={ROUTES.REGISTER}
                        element={<div>Регистрация</div>}
                    />
                    <Route path={ROUTES.LOGIN} element={<div>Авторизация</div>} />
                    <Route path={ROUTES.NOT_FOUND} element={<div>Ошибка</div>} />
                </Routes>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default App
