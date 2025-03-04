import { useAppSelector } from "../../hooks/hooks";
import { selectAllBooks } from "@slices/books-slice";
import { BookCard } from "@components";

const BookCardList: React.FC = () => {
    const booksList = useAppSelector(selectAllBooks);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-4 mx-auto max-w-[1536px]">
            {booksList.map((book) => (
                <BookCard {...book} key={book.key} />
            ))}
        </div>
    );
};

export { BookCardList };
