import { Routes, Route } from 'react-router-dom'
import { Header } from '@components'
import './index.css'
import './App.css'

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
