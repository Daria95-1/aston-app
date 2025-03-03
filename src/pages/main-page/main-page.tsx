import { BookCard, Filters, RecentlyViewed, Search } from '@components'
import { books, recentlyViewed } from '../../mock';
import './main-page.css'

export const MainPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="p-4 flex-1">
        <div className="mx-auto max-w-[1536px]">
          <Search />
          <Filters />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-4 mx-auto max-w-[1536px]">
          {books.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
        <div className="grid grid-cols-1  gap-4 my-4 mx-auto max-w-[1536px]">
          <RecentlyViewed books={recentlyViewed} />
        </div>
      </main>
    </div>
  );
}


