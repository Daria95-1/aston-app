import React from 'react';
import { BookCard } from './BookCard';

type RecentlyViewedProps ={
  books: { id: number; price: number; title: string }[];
}

const RecentlyViewed: React.FC<RecentlyViewedProps> = ({ books }) => {
  return (
    <div className="my-4">
      <h2 className="text-xl font-bold mb-2">Вы смотрели ранее</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
        Показать все
      </button>
    </div>
  );
};

export  { RecentlyViewed };