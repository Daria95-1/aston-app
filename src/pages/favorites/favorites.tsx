import { EmptyFavorites } from '@pages'
import { BookCard } from '@components'
import { selectUserFavorites } from '@slices/user-slice'
import { useSelector, useDispatch } from 'react-redux'
import { removeBookFromFavorites } from '@bff/operation'
import { AppDispatch } from '../../store'

export const Favorites = () => {
    const favorites = useSelector(selectUserFavorites)
    const dispatch = useDispatch<AppDispatch>()

    const handleDeleteFavoriteClick = (bookId: string): void => {
        removeBookFromFavorites(dispatch, bookId)
    }

    const getFavoriteClickHandler = (bookId: string) => () => {
        handleDeleteFavoriteClick(bookId)
    }

    if (favorites.length === 0) {
        return <EmptyFavorites />
    }

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
                {favorites.map((favorite) => (
                    <BookCard
                        key={favorite.key}
                        bookId={favorite.key}
                        cover_edition_key={favorite.cover_edition_key}
                        title={favorite.title}
                        author_name={favorite.author_name}
                        isFavorite={true}
                        onFavoriteClick={getFavoriteClickHandler(favorite.key)}
                    />
                ))}
            </div>
        </div>
    )
}
