// подключить БД:
// json-server --watch src/db.json --port 5180

import { Routes, Route } from 'react-router-dom'
import { Header } from '@components'
import { Authorization } from '@pages'
import './App.css'


function App() {
    return (
        <>
            <Header />
            <div>
                <Routes>
                    <Route path="/register" element={<div>Регистрация</div>} />
                    <Route path="/login" element={<Authorization />} />
                    <Route path='*' element={<div>Ошибка</div>} />
                </Routes>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default App
