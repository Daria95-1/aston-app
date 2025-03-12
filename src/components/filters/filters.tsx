import { Button, Icon } from '@components';

const filters = [
    { id: 'popular', label: 'По популярности', icon: 'bi-star' },
    { id: 'date', label: 'По дате', icon: null }, 
    { id: 'random', label: 'Случайные', icon: null }
  ] as const;

type FiltersProps = {
    activeFilter: 'popular' | 'date' | 'random';
    dateDirection: 'new' | 'old';
    onFilterChange: (filter: 'popular' | 'date' | 'random') => void;
    onDateDirection: () => void;
}
  
export const Filters: React.FC<FiltersProps> = ({
    activeFilter,
    dateDirection,
    onFilterChange,
    onDateDirection,
}) => {
    const handleFilterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const filter = event.currentTarget.dataset.filter as 'popular' | 'date' | 'random';
      
        if (filter === 'date' && activeFilter === 'date') {
          onDateDirection(); 
        } else {
          onFilterChange(filter); 
        }
      };

    return (
        <div className="mx-auto max-w-[1536px]">
            <div className="flex space-x-4 gap-5 mt-5 mb-8">
                {filters.map((filter) => {
                    const buttonLabel =
                        filter.id === 'date'
                            ? dateDirection === 'new'
                                ? 'Сначала новые'
                                : 'Сначала старые'
                            : filter.label;

                    const iconClass = filter.id === 'popular' ? filter.icon : null;

                    return (
                        <Button
                            key={filter.id}
                            variant="filter"
                            isActive={activeFilter === filter.id}
                            dataFilter={filter.id}
                            onClick={handleFilterClick}
                        >
                            {buttonLabel}{' '}
                            {iconClass && <Icon className={`${iconClass} ml-1`} />}
                        </Button>
                    );
                })}
            </div>
        </div>
    );
};