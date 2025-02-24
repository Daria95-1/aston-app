import { useEffect } from "react";
import "./App.css";
import { fetchBooks, selectAllBooks, selectError, selectStatus } from "./store/booksSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";

function App() {
    const dispatch = useAppDispatch();
    const selectBooks = useAppSelector(selectAllBooks);
    const status = useAppSelector(selectStatus);
    const error = useAppSelector(selectError);

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    return (
        <>
            {status === "loading" && <h2>Loading.........</h2>}
            {error && <h2>An error has occured {error}</h2>}
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
