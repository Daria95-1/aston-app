import React from 'react';

const Search: React.FC = () => {
  return (
    <div className="my-4">
      <input
        type="text"
        placeholder="Найдите книгу..."
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default Search;