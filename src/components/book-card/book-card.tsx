import { Button, FavoriteButton } from '@components'
import { ROUTES } from '@constants'
import imageNotFound from '../../image/image_not_found.png';
import { useNavigate } from 'react-router-dom';
import { truncateText } from './book-card-utils';

type Book = {
    author_name?: string[];
    cover_edition_key: string;
    key: string;
    title: string;
    first_publish_year: string;
    itemKey: string;
    bookId: string
};

export const BookCard: React.FC<Book> = ({ title, author_name, cover_edition_key, itemKey, first_publish_year,  bookId }) => {
    const navigate = useNavigate();
    const bookRoute = bookId.split("/").pop();
    const authorText = author_name && author_name.length > 0 ? author_name.join(', ') : 'Автор неизвестен';
    const truncatedTitle = truncateText(title, 30);
    const truncatedAuthor = truncateText(authorText, 30);
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
        navigate(`${ROUTES.ITEM_PAGE.replace(':key', bookRoute)}`, {
            state: {
                key: itemKey, 
                image: image,
                year: first_publish_year,
                author: author_name,
                title: title,
                cover_edition_key: cover_edition_key
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

            <p 
                className="truncate"
                title={title || ''} 
            >
                {truncatedTitle || ''} 
            </p>
            <p 
                className="text-sm text-gray-600 truncate"
                title={authorText} 
            >
                {truncatedAuthor}
            </p>
            <div className="mt-2 flex justify-center items-center space-x-2">
                <Button variant="check" onClick={handleDetailsClick}>Подробнее</Button>
            </div>
        </div>
    )
}


