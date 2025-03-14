import { useAppSelector } from "../../hooks/hooks";
import { selectAllBooks, isBooksLoadingSelector } from "@slices/books-slice";
import { BookCard } from "@components";

export const BookCardList: React.FC = () => {
    const booksList = useAppSelector(selectAllBooks);
    const isLoading = useAppSelector(isBooksLoadingSelector);

    return (
        <div className="grid grid-cols-1 min-h-screen sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-5 gap-4 my-4 mx-auto max-w-[1536px]">
            {isLoading ? (
                <div className="loader"></div>
            ) : (
                booksList.map((book) => (
                    <BookCard
                        key={book.key}
                        itemKey={book.key}
                        bookId={book.key}
                        cover_edition_key={book.cover_edition_key}
                        title={book.title}
                        author_name={book.author_name}
                    />
                ))
            )}
        </div>
    );
};
