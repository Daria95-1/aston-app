import { useEffect } from "react";
import { Routes, Route } from 'react-router-dom'
import { Header } from '@components'
import { ROUTES } from '@constants/routes'
import { fetchBooks, isBooksLoadingSelector, selectAllBooks, selectError } from "./store/booksSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import "./App.css";

function App() {
    const dispatch = useAppDispatch();
    const selectBooks = useAppSelector(selectAllBooks);
    const error = useAppSelector(selectError);
    const isBooksLoading = useAppSelector(isBooksLoadingSelector);

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

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
            {isBooksLoading && <h2>Loading.........</h2>}
            {error && <h2>An error has occured {error}</h2>}
            <ul>
                {selectBooks.map((el, i) => (
                    <li key={i}>
                        {i + 1}. Title: "{el.title}"
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;