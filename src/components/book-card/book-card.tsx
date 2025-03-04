import { useSelector } from 'react-redux'
import { ROLE } from '@constants'
import { selectUserRole } from '@slices'
import { Button, Icon } from '@components'
import { ROUTES } from '@constants'

type Book = {
    bookId: string
    author_name: string
    cover_edition_key: string
    title: string
    isFavorite: boolean
    onFavoriteClick: (key: string, isFavorite: boolean) => void
}

const BookCard: React.FC<Book> = ({
    bookId,
    author_name,
    cover_edition_key,
    title,
    isFavorite,
    onFavoriteClick,
}) => {
    const userRole = useSelector(selectUserRole) as ROLE
    const isUserAuthorized = userRole !== ROLE.GUEST
    const changeIcon = isFavorite ? 'bi-heart-fill' : 'bi-heart'

    const handleFavoriteClick = () => {
        onFavoriteClick(bookId, isFavorite)
    }

    const showFavoriteButton = isUserAuthorized && (
        <Button variant="like">
            <Icon className={changeIcon} onClick={handleFavoriteClick} />
        </Button>
    )

    return (
        <div className="border border-gray-300 rounded p-2 text-center">
            <img
                src={`${ROUTES.LIBRARY_COVERS}${cover_edition_key}-M.jpg`}
                alt={title}
                className="w-full h-60 object-cover mb-2"
            />
            <p>{title}</p>
            <p className="text-sm text-gray-600">{author_name}</p>
            <div className="mt-2 flex justify-center items-center space-x-2">
                <Button variant="check">Подробнее</Button>
                {showFavoriteButton}
            </div>
        </div>
    )
}

export { BookCard }
