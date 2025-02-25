import { useState } from 'react'

import './App.css'
import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Filters from './components/Filters';
import BookCard from './components/BookCard';
import RecentlyViewed from './components/RecentlyViewed';
import Footer from './components/Footer';

function App() {
  const books = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    price: 333,
    title: `Книга ${i + 1}`,
    author: 'Лев Толстой',
    image: `https://ir-7.ozone.ru/s3/multimedia-j/wc1000/6887843875.jpg`,
  }));

  const recentlyViewed = Array.from({ length: 3 }, (_, i) => ({
    id: i + 1,
    price: 333,
    title: `Книга ${i + 1}`,
    author: 'Лев Толстой',
    image: `https://ir-7.ozone.ru/s3/multimedia-j/wc1000/6887843875.jpg`,
  }));

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

export default App;


