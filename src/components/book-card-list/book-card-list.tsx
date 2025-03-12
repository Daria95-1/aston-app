import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { selectAllBooks, isBooksLoadingSelector } from '@slices/books-slice'
import { BookCard } from '@components'
import {
    selectUserFavorites,
    deleteFromFavorites,
    addToFavorites,
} from '@slices/user-slice'
import { useSelector } from 'react-redux'

const BookCardList: React.FC = () => {
    const booksList = useAppSelector(selectAllBooks)
    const isLoading = useAppSelector(isBooksLoadingSelector)
    const favorites = useSelector(selectUserFavorites)
    const dispatch = useAppDispatch()

    const handleFavoriteClick = async (bookId: string, isFavorite: boolean) => {
        if (isFavorite) {
            dispatch(deleteFromFavorites(bookId))
        } else {
            const book = booksList.find((b) => b.key === bookId)
            if (book) {
                dispatch(addToFavorites(book))
            }
        }
    }

    const getFavoriteClickHandler =
        (bookId: string, isFavorite: boolean) => () => {
            handleFavoriteClick(bookId, isFavorite)
        }

    if (isLoading) {
        return (
            <div className="min-h-screen">
                <div className="loader"></div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 my-4 mx-auto max-w-[1536px] mb-10">
            {booksList.map((book) => {
                const isFavorite = favorites.some(
                    (favorite) => favorite.key === book.key
                )
                return (
                    <BookCard
                        key={book.key}
                        bookId={book.key}
                        cover_edition_key={book.cover_edition_key}
                        title={book.title}
                        author_name={book.author_name}
                        isFavorite={isFavorite}
                        onFavoriteClick={getFavoriteClickHandler(
                            book.key,
                            isFavorite
                        )}
                    />
                )
            })}
        </div>
    )
}

export { BookCardList }
