import  { useState } from 'react';
import { Button, Icon } from '@components';

export const Filters: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter === activeFilter ? null : filter); 
    
  };

  return (
    <div className="mx-auto max-w-[1536px]">
      <h2 className="text-xl font-bold mb-2 ml-0">Новинки</h2>
      <div className="flex space-x-4">
        <Button
          variant="filter"
          isActive={activeFilter === 'popular'}
          onClick={() => handleFilterClick('popular')}
        >
          По популярности <Icon className={'bi-star ml-1'} />
        </Button>
        <Button
          variant="filter"
          isActive={activeFilter === 'price-up'}
          onClick={() => handleFilterClick('price-up')}
        >
          По алфавиту <Icon className={'bi-sort-alpha-up ml-1'} />
        </Button>
        <Button
          variant="filter"
          isActive={activeFilter === 'price-down'}
          onClick={() => handleFilterClick('price-down')}
        >
          По алфавиту <Icon className={'bi-sort-alpha-down ml-1'} />
        </Button>
      </div>
    </div>
  );
};