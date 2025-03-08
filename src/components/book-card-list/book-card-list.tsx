import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectAllBooks, isBooksLoadingSelector } from "@slices/books-slice";
import { addBookToFavorites, removeBookFromFavorites } from "@bff/operation";
import { BookCard } from "@components";
import { selectUserFavorites } from '@slices/user-slice'
import { useSelector } from "react-redux";

const BookCardList: React.FC = () => {
    const booksList = useAppSelector(selectAllBooks);
    const isLoading = useAppSelector(isBooksLoadingSelector);
    const favorites = useSelector(selectUserFavorites);
    const dispatch = useAppDispatch();

    const handleFavoriteClick = async (
        bookId: string,
        isFavorite: boolean
    ) => {
        if (isFavorite) {
            await removeBookFromFavorites(dispatch, bookId)
        } else {
            const book = booksList.find((b) => b.key === bookId)
            if (book) {
                await addBookToFavorites(dispatch, book)
            }
        }
    }

    const getFavoriteClickHandler =
        (bookId: string, isFavorite: boolean) => () => {
            handleFavoriteClick(bookId, isFavorite)
        }

    if (isLoading) {
        return <div className="loader"></div>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 my-4 w-full max-w-full">
            {booksList.map((book) => {
                const isFavorite = favorites.some((favorite) => favorite.key === book.key);
                return (
                    <BookCard
                        key={book.key}
                        bookId={book.key}
                        cover_edition_key={book.cover_edition_key}
                        title={book.title}
                        author_name={book.author_name}
                        isFavorite={isFavorite}
                        onFavoriteClick={getFavoriteClickHandler(book.key, isFavorite)}
                    />
                );
            })}
        </div>
    );
};

export { BookCardList };
