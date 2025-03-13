import { BookCard } from '@components';
import { useSelector } from 'react-redux';
import { selectUserHistory } from '@slices/user-slice'
// import noItemsImage from "../../image/noItemsImage.png";
import { Link } from 'react-router-dom'
import { ROUTES, STORAGE_KEYS } from '@constants'
import { getFilteredHistory } from './recently-viewed-utils';
import { useEffect } from 'react';

type RecentlyViewedProps = {
  nonVisible: string;
};

export const RecentlyViewed: React.FC<RecentlyViewedProps> = ({nonVisible}) => {
  
  const history = useSelector(selectUserHistory)
  const filteredHistory = getFilteredHistory(history, nonVisible);

  useEffect(() => {
      sessionStorage.setItem(STORAGE_KEYS.HISTORY_DATA, JSON.stringify(history))
  }, [history])

  if (!filteredHistory.length) return null
          
  return (
    <div className="grid mx-auto max-w-[1536px]">
      <Link to={ROUTES.HISTORY}>
        <h2 className="text-xl font-bold mb-2 text-left">Вы смотрели ранее</h2>
      </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4">
          {filteredHistory.map((oneOfHistory) => (
            <BookCard
              key={oneOfHistory.key}
              itemKey={oneOfHistory.key}
              bookId={oneOfHistory.key}
              cover_edition_key={oneOfHistory.cover_edition_key}
              title={oneOfHistory.title}
              author_name={oneOfHistory.author_name}
            />
          ))}
        </div>
    </div>
  );
};