import "../../pages/mainpage/MainPage.css";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectAllBooks } from "@slices/books-slice";
import { useEffect } from "react";
import { fetchBooks } from "@slices/books-slice";
import { BookCard } from "@components/BookCard";

const BookCardList: React.FC = () => {
    const dispatch = useAppDispatch();
    const booksList = useAppSelector(selectAllBooks);

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 my-4 w-full max-w-full">
            {booksList.map((book) => (
                <BookCard {...book} key={book.key} />
            ))}
        </div>
    );
};

export { BookCardList };
