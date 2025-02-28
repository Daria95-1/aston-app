import { Routes, Route } from 'react-router-dom'
import { Header } from '@components'
import { ROUTES } from '@constants'
import { Authorization } from '@pages'
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
                    <Route path={ROUTES.LOGIN} element={<Authorization />} />
                    <Route path={ROUTES.NOT_FOUND} element={<div>Ошибка</div>} />
                </Routes>
            {/* <Footer /> */}
        </>
    );
}

export default App;
