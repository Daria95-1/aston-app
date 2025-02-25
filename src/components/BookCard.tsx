import React from 'react';

interface BookCardProps {
  id: number;
  price: number;
  title: string;
  author: string;
  image: string; 
}

const BookCard: React.FC<BookCardProps> = ({ price, title, author, image }) => {
  return (
    <div className="border border-gray-300 rounded p-2 text-center">
      <img src={image} alt={title} className="w-full h-60 object-cover mb-2" />
      <p className="font-bold">{price} Р</p>
      <p>{title}</p>
      <p className="text-sm text-gray-600">{author}</p>
      <div className="mt-2 flex justify-center items-center space-x-2">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Купить
        </button>
        <button className="text-blue-400">🩵</button>
      </div>
    </div>
  );
};

export default BookCard;