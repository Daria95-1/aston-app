import { useState } from 'react'

import './MainPage.css'
import { Search } from '@components/Search';
import { Filters } from '@components/Filters';
import { BookCard } from '@components/BookCard';
import { RecentlyViewed } from '@components/RecentlyViewed';
import { books, recentlyViewed } from '../../mock';

function Mainpage() {

  return (
    <div className="min-h-screen flex flex-col">
      <main className="p-4 flex-1">
        <Search />
        <Filters />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 gap-4 my-4 w-full max-w-full">
          {books.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4 w-full max-w-full">
          <RecentlyViewed books={recentlyViewed} />
        </div>
      </main>
    </div>
  );
}

export  { Mainpage };


