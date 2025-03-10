import { addBookToFavorites, removeBookFromFavorites } from '@bff/operation'
import { useAppDispatch } from "../../src/hooks/hooks";
import { Book } from '@slices/books-slice';






export const useFavoriteHandler = () => {
    const dispatch = useAppDispatch();
  
    const handleFavoriteClick = async (bookId: string, book: Book, isFavorite: boolean) => {
      try {
        if (isFavorite) {
          await removeBookFromFavorites(dispatch, bookId);
        } else {
          await addBookToFavorites(dispatch, book);
        }
      } catch (error) {
        console.error('Error in handleFavoriteClick:', error);
      }
    };
  
    return { handleFavoriteClick };
  };
