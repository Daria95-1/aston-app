import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectAllBooks, isBooksLoadingSelector } from '@slices/books-slice'
import { useEffect } from "react";
import { fetchBooks } from "@slices/books-slice";
import { BookCard } from "@components";


export const BookCardList: React.FC = () => {
    const dispatch = useAppDispatch();
    const booksList = useAppSelector(selectAllBooks);
    const isLoading = useAppSelector(isBooksLoadingSelector)

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    return (
            
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-5 gap-4 my-4 mx-auto max-w-[1536px]">
            {booksList.map((book) => {
                return (
                    <BookCard
                        itemKey={book.key}
                        bookId={book.key}
                        cover_edition_key={book.cover_edition_key}
                        title={book.title}
                        author_name={book.author_name}
                        
                    />
                )
            })}
        </div>
    )
};