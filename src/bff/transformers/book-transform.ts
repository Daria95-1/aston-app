import { Book } from '@slices/books-slice';

export type RawBook = {
    key: string
    title: string
    author_name: string[]
    cover_edition_key: string
}

export const bookTransform = (bookData: RawBook): Book => {
    return {
        key: bookData.key,
        title: bookData.title,
        author_name: bookData.author_name,
        cover_edition_key: bookData.cover_edition_key,
    }
}