import  { useEffect,  } from 'react';
import { Button, Icon, ItemContent, RecentlyViewed,  } from '@components';
import { useLocation } from 'react-router-dom';
import { ROUTES } from "@constants";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectBook, fetchOneBook } from "@slices/oneBook-slice";
import { RootState } from '../../store';
import {  addBookToHistory } from '@bff/operation'
import { useFavoriteHandler } from '../../hendlers/handleFavoriteClick'
import { useSelector } from 'react-redux'
import {  isBookFavorite } from '@slices/user-slice'



  
export const ItemPage: React.FC = () => {
  const location = useLocation();
  const books = location.state;
  
  const dispatch = useAppDispatch();
  const book = useAppSelector(selectBook);
  const { handleFavoriteClick } = useFavoriteHandler();
  const isFavorite = useSelector((state: RootState) => isBookFavorite(state, books.key));
  const changeIcon = isFavorite ? 'bi-heart-fill' : 'bi-heart';
  const addFavoriteButtonText = isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'
  const Item = {
    key: books.key,
    title: books.title,
    author_name: books.author,
    cover_edition_key: books.image,
    first_publish_year: books.year
  }


  const descriptionText =
    typeof book.description === 'object' && book.description !== null
      ? book.description.value || 'Описание книги отсутствует.'
      : book.description || 'Описание книги отсутствует.';
  const tags = book.subjects && book.subjects.length > 0 ? book.subjects : [];


  useEffect(() => {
    addBookToHistory(dispatch, Item);
  }, [dispatch, ]);

  useEffect(() => {
    dispatch(fetchOneBook(books.key));
  }, [dispatch,  books.key]);

  
  
  return (
    <div>
      <div className=" flex flex-col md:flex-row gap-8 mb-16 mt-16 mx-auto max-w-[1536px]">
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
          <Button variant="check" className="w-full mt-6" onClick={() => handleFavoriteClick(books.key, Item, isFavorite,)} >
            <div className="flex items-center justify-center" style={{gap:'4px'}}>
              {addFavoriteButtonText}
              <Icon className={changeIcon}  />
            </div>
          </Button>
        </div>
      </div>
      <RecentlyViewed  nonVisible={books.key} />
    </div>
  );
};
  