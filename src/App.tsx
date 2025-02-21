import { Routes, Route } from 'react-router-dom'
import './App.css'

const Header = () => <div>Хедер</div>
const Footer = () => <div>Футер</div>

function App() {
    return (
        <>
            <Header />
            <div>
                <h2>Контент страницы</h2>
                <Routes>
                    <Route path="/register" element={<div>Регистрация</div>} />
                    <Route path="/login" element={<div>Авторизация</div>} />
                    {/* <Route path='*' element={<div>Ошибка</div>} /> */}
                </Routes>
            </div>
            <Footer />
        </>
    )
}

export default App
