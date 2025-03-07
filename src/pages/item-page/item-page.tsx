import  { useEffect, useState } from 'react';
import { Button, Icon, ItemContent, RecentlyViewed,  } from '@components';
import { useLocation } from 'react-router-dom';
import { ROUTES } from "@constants";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectBook, fetchOneBook } from "@slices/oneBook-slice";
import { addToFavorites, deleteFromFavorites, selectUserFavorites } from '@slices/user-slice';
import { recentlyViewed } from "../../mock";


  
export const ItemPage: React.FC = () => {
  const location = useLocation();
  const books = location.state;
  const dispatch = useAppDispatch();
  const book = useAppSelector(selectBook);
  const favorites = useAppSelector(selectUserFavorites);
  const [isFavorite, setIsFavorite] = useState(
    favorites.some((fav) => fav.key === books.key) || books?.isFavorite || false
  );

  const changeIcon = isFavorite ? 'bi-heart-fill' : 'bi-heart';
  const addFavoriteButtonText = isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'
  const handleFavoriteClick = () => {
    const bookData = {
      key: books.key,
      title: book.title,
      author_name: books.author,
      cover_edition_key: books.image,
    };
    if (isFavorite) {
      dispatch(deleteFromFavorites(books.key));
    } else {
      dispatch(addToFavorites(bookData));
    }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    dispatch(fetchOneBook(books.key));
  }, [dispatch, books.key]);


  const descriptionText =
    typeof book.description === 'object' && book.description !== null
      ? book.description.value || 'Описание книги отсутствует.'
      : book.description || 'Описание книги отсутствует.';
  const tags =
    book.subjects && book.subjects.length > 0 ? book.subjects : 'отсутствуют';

  return (
    <div className="min-h-screen flex flex-col mt-16">
        <div className="mx-auto max-w-[1536px] flex flex-col md:flex-row gap-8 mb-16">
          <img
            src={`${ROUTES.LIBRARY_COVERS}${books.image}-M.jpg`}
            alt={book.title}
            className="w-[350px] h-[500px] object-cover object-center"
          />
          <ItemContent
            description={descriptionText}
            author={books.author}
            year={books.year}
            title={book.title}
            tags={tags}
          />
          <div className="p-4 bg-white rounded-lg shadow-lg border border-gray-200 w-[350px] h-[200px] " >
            <div className="text-14 mt-4 mb-4 flex leading-relaxed gap-2">
                <Icon className="bi bi-shop"/> Приобрести книгу вы можете в наших магазинах, предварительно оставив offline-заявку
            </div>
            <Button variant="check" className="w-full mt-6" onClick={handleFavoriteClick} >
              <div className="flex items-center justify-center" style={{gap:'4px'}}>
                {addFavoriteButtonText}
                <Icon className={changeIcon}  />
              </div>
            </Button>
          </div>
        </div>
        <RecentlyViewed books={recentlyViewed}/>

    </div>
  );
};
  