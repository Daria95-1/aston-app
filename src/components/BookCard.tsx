import { useAppDispatch } from "../hooks/hooks";
import { Button } from "./Button";
import { fetchOneBook } from "@slices/oneBook-slice";

type Book = {
    author_key: string[];
    author_name: string[];
    cover_edition_key: string;
    cover_i: number;
    edition_count: number;
    first_publish_year: number;
    key: string;
    title: string;
};

const BookCard: React.FC<Book> = ({ key = "/works/OL27448W", title, author_name, cover_i }) => {
    const dispatch = useAppDispatch();

    return (
        <div className="border border-gray-300 rounded p-2 text-center">
            <img src={`${cover_i}`} alt={title} className="w-full h-60 object-cover mb-2" />
            <p>{title}</p>
            <p className="text-sm text-gray-600">{author_name}</p>
            <div className="mt-2 flex justify-center items-center space-x-2">
                <Button onClick={() => dispatch(fetchOneBook(key))} variant="check">
                    Подробнее
                </Button>
                <Button variant="like">🩵</Button>
            </div>
        </div>
    );
};

export { BookCard };
