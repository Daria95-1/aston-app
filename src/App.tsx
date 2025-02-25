// подключить БД:
// json-server --watch src/db.json --port 5180

import { Routes, Route } from 'react-router-dom'
import { Header } from '@components'
import { ROUTES } from '@constants'
import './index.css'
import './App.css'

function App() {
    return (
        <>
            <Header />
                <Routes>
                    <Route
                        path={ROUTES.REGISTER}
                        element={<div>Регистрация</div>}
                    />
                    <Route path={ROUTES.LOGIN} element={<div>Авторизация</div>} />
                    <Route path={ROUTES.NOT_FOUND} element={<div>Ошибка</div>} />
                </Routes>
            {/* <Footer /> */}
        </>
    );
}

export default App;
