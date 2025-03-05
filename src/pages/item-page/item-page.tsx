import  { useEffect } from 'react';
import { Button, Icon, Description } from '@components';
import { useLocation } from 'react-router-dom';
import { ROUTES } from "@constants";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectBook, fetchOneBook } from "@slices/oneBook-slice";


  
  export const ItemPage: React.FC = () => {
    const location = useLocation();
    const books = location.state;
    const dispatch = useAppDispatch();
    const book = useAppSelector(selectBook);

    useEffect(() => {
    dispatch(fetchOneBook(books.key || '')); 
    }, [dispatch]);
    console.log('книга', book)
    const descriptionText = typeof book.description === 'object' && book.description !== null 
      ? book.description.value || 'Описание книги отсутствует.'
      : book.description || 'Описание книги отсутствует.';
    const tags = book.subjects && book.subjects.length > 0 
      ? book.subjects.join(', ') 
      : 'Теги отсутствуют';
  
    return (
      <div className="min-h-screen flex flex-col">
        <main className="p-4 flex-1">
          <div className="mx-auto max-w-[1536px] flex flex-col md:flex-row gap-8">
            <img
                src={`${ROUTES.LIBRARY_COVERS}${books.image}-M.jpg`}
                alt={book.title}
                className="w-[300px] h-[400px] object-cover object-center"
            />
  
            <div className="w-full md:w-2/3 flex flex-col gap-4">
            <Description text={descriptionText} />
              
              <div className="flex flex-col gap-2">
                <p>Название: {book.title || 'Автор неизвестен'}</p>
                <p>Автор: {books.author || 'Автор неизвестен'}</p>
                <p>Год: {books.year || 'Год неизвестен'}</p>
                <p>tags: {tags || 'Год неизвестен'}</p>
              </div>
              
            </div>
          </div>
  
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Вы смотрели ранее</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto max-w-[1536px]">
            </div>
          </div>
        </main>
      </div>
    );
  };
  