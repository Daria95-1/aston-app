import { useState } from 'react'

import './MainPage.css'
import React from 'react';
import { Header } from '../../components/Header';
import { Search } from '../../components/Search';
import { Filters } from '../../components/Filters';
import { BookCard } from '../../components/BookCard';
import { RecentlyViewed } from '../../components/RecentlyViewed';
import { Footer } from '../../components/Footer';
import { books, recentlyViewed } from '../../mock';

function Mainpage() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
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
      <Footer />
    </div>
  );
}

export  { Mainpage };


