import { bookTransform, RawBook } from './book-transform'
import { Book } from '@slices/books-slice';

export const transformFavorites = (favoritesData: RawBook[]): Book[] => {
    return favoritesData.map((bookData) => bookTransform(bookData))
}
