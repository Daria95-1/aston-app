import { useSelector } from 'react-redux'
import { ROLE } from '@constants'
import { selectUserRole, isBookFavorite } from '@slices/user-slice'
import { Button, Icon } from '@components'
import { ROUTES } from '@constants'
import { useFavoriteHandler } from '../../hendlers/handleFavoriteClick'
import { RootState } from '../../store';


import { useNavigate } from 'react-router-dom';

type Book = {
    author_name: string[];
    cover_edition_key: string;
    key: string;
    title: string;
    first_publish_year: string;
    itemKey: string;
    bookId: string
};


export const BookCard: React.FC<Book> = ({ title, author_name, cover_edition_key, itemKey, first_publish_year,  bookId }) => {
    const navigate = useNavigate();
    const userRole = useSelector(selectUserRole) as ROLE
    const isUserAuthorized = userRole !== ROLE.GUEST
    const bookData = {
        key: bookId,
        title: title,
        author_name: author_name,
        cover_edition_key: cover_edition_key,
        first_publish_year: first_publish_year
      };
    const { handleFavoriteClick } = useFavoriteHandler();
    const isFavorite = useSelector((state: RootState) => isBookFavorite(state, bookId));
    const changeIcon = isFavorite ? 'bi-heart-fill' : 'bi-heart';

    const showFavoriteButton = isUserAuthorized && (
        <Button variant="like">
            <Icon className={changeIcon} onClick={() => handleFavoriteClick(bookId, bookData, isFavorite,)} />
        </Button>
    )
    const handleDetailsClick = () => {
        navigate(`${ROUTES.ITEM_PAGE.replace(':key', cover_edition_key)}`, {
            state: {
                key: itemKey, 
                image: cover_edition_key,
                year: first_publish_year,
                author: author_name,
                title: title,
              },
        });
    } 
    return (
        <div className="border border-gray-300 rounded p-2 text-center">
            <img
                src={`${ROUTES.LIBRARY_COVERS}${cover_edition_key}-M.jpg`}
                alt={title}
                className="w-full h-120 object-cover mb-2"
            />
            <p>{title}</p>
            <p className="text-sm text-gray-600">{author_name}</p>
            <div className="mt-2 flex justify-center items-center space-x-2">
                <Button variant="check" onClick={handleDetailsClick}>Подробнее</Button>
                {showFavoriteButton}
            </div>
        </div>
    )
}


