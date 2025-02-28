import { BookCard, Filters, RecentlyViewed, Search } from '@components'
import { books, recentlyViewed } from '../../mock';

export const MainPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="p-4 flex-1">
        <Search />
        <Filters />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 my-4 w-full max-w-full">
          {books.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
        <RecentlyViewed books={recentlyViewed} />
      </main>
    </div>
  );
}


