import { Routes, Route } from 'react-router-dom'
import { Header } from '@components'
import './App.css'
// подключить БД:
// json-server --watch src/db.json --port 5180

function App() {
    return (
        <>
            <Header />
            <div>
                {/* <h2>Контент страницы</h2> */}
                <Routes>
                    <Route path="/register" element={<div>Регистрация</div>} />
                    <Route path="/login" element={<div>Авторизация</div>} />
                    {/* <Route path='*' element={<div>Ошибка</div>} /> */}
                </Routes>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default App
