// подключить БД:
// json-server --watch src/db.json --port 5180

import { Routes, Route } from 'react-router-dom'
import { Header } from '@components'
import { ROUTES } from '@constants/routes'
import { Authorization } from '@pages'
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
                    <Route path={ROUTES.LOGIN} element={<Authorization />} />
                    <Route
                        path={ROUTES.NOT_FOUND}
                        element={<div>Ошибка</div>}
                    />
                </Routes>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default App
