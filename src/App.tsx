import { useEffect } from "react";
import "./App.css";
import { fetchBooks } from "./store/booksSlice";
import { useAppDispatch, useAppSelectore } from "./hooks/hooks";

function App() {
    const dispatch = useAppDispatch();
    const selectBooks = useAppSelectore((state) => state.books.bookList);
    const selectStatus = useAppSelectore((state) => state.books.status);
    const selectError = useAppSelectore((state) => state.books.error);

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    return (
        <>
            {selectStatus === 'loading' && <h2>Loading.........</h2>}
            {selectError && <h2>An error has occured {selectError}</h2>}
            <ul>
                {selectBooks.map((el, i) => {
                    return (
                        <li key={i}>
                            {i + 1}. Title: "{el.title}"
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default App;
