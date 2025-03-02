import  { useState } from 'react';
import { Button } from './Button';

const Filters: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter === activeFilter ? null : filter); 
    
  };

  return (
    <div className="my-4">
      <h2 className="text-xl font-bold mb-2 ml-0">Новинки</h2>
      <div className="flex space-x-4">
        <Button
          variant="filter"
          isActive={activeFilter === 'popular'}
          onClick={() => handleFilterClick('popular')}
        >
          По популярности
        </Button>
        <Button
          variant="filter"
          isActive={activeFilter === 'price-up'}
          onClick={() => handleFilterClick('price-up')}
        >
          По возрастанию цены ⬆
        </Button>
        <Button
          variant="filter"
          isActive={activeFilter === 'price-down'}
          onClick={() => handleFilterClick('price-down')}
        >
          По убыванию цены ⬇
        </Button>
      </div>
    </div>
  );
};

export { Filters };