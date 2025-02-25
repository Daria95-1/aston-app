import React from 'react';

const Filters: React.FC = () => {
  return (
    <div className="my-4">
      <h2 className="text-xl font-bold mb-2 ml-0">Новинки</h2>
      <div className="flex space-x-4">
        <button className="p-2 border rounded flex items-center">
          По популярности
        </button>
        <button className="p-2 border rounded flex items-center">
          По возрастанию цены ⬆
        </button>
        <button className="p-2 border rounded flex items-center">
          По убыванию цены ⬇
        </button>
      </div>
    </div>
  );
};

export default Filters;