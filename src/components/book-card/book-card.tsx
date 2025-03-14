import { Button, FavoriteButton } from '@components'
import { ROUTES } from '@constants'
import imageNotFound from '../../image/image_not_found.png';
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
    const image = cover_edition_key
    ? `${ROUTES.LIBRARY_COVERS}${cover_edition_key}-M.jpg`
    : imageNotFound;
    const bookData = {
        key: bookId,
        title: title,
        author_name: author_name,
        cover_edition_key: cover_edition_key,
        first_publish_year: first_publish_year
      };

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
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-120 object-cover mb-2"
                />
                <FavoriteButton
                    variant="like"
                    book={bookData}
                />
            </div>

            <p>{title}</p>
            <p className="text-sm text-gray-600">{author_name}</p>
            <div className="mt-2 flex justify-center items-center space-x-2">
                <Button variant="check" onClick={handleDetailsClick}>Подробнее</Button>
            </div>
        </div>
    )
}


