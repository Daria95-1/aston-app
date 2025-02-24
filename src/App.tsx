import { useEffect } from "react";
import "./App.css";
import { fetchBooks, isBooksLoadingSelector, selectAllBooks, selectError } from "./store/booksSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";

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
