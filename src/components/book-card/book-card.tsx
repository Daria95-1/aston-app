import { Button, Icon } from "@components";
import { ROUTES } from "@constants";

type Book = {
    author_name: string[];
    cover_edition_key: string;
    key: string;
    title: string;
};

const BookCard: React.FC<Book> = ({ title, author_name, cover_edition_key }) => {
    return (
        <div className="border border-gray-300 rounded p-2 text-center">
            <img
                src={`${ROUTES.LIBRARY_COVERS}${cover_edition_key}-S.jpg`}
                alt={title}
                className="w-full h-60 object-cover mb-2"
            />
            <p>{title}</p>
            <p className="text-sm text-gray-600">{author_name}</p>
            <div className="mt-2 flex justify-center items-center space-x-2">
                <Button variant="check">Подробнее</Button>
                <Button variant="like">
                    <Icon className={"bi-heart"} />
                </Button>
            </div>
        </div>
    );
};

export { BookCard };
