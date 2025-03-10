import { BookCard } from '@components';
import { useSelector } from 'react-redux';
import { selectUserHistory } from '@slices/user-slice'
import noItemsImage from "../../image/noItemsImage.png";
import { Link } from 'react-router-dom'
import { ROUTES } from '@constants'

type RecentlyViewedProps = {
  nonVisible: string;
  
};



export const RecentlyViewed: React.FC<RecentlyViewedProps> = ({nonVisible}) => {

  
       
  const history = useSelector(selectUserHistory)
  
  const filteredHistory = history
  .filter((oneOfHistory) => oneOfHistory.key !== nonVisible)
  .slice(0, 5);
          
  return (
    <div className="grid mx-auto max-w-[1536px] mb-15">
        <Link className="logo-link" to={ROUTES.HISTORY}>
          <h2 className="text-xl font-bold mb-2 text-left">Вы смотрели ранее</h2>
        </Link>
        {filteredHistory.length === 0 ? (
          <img
            src={noItemsImage} 
            alt="No items viewed"
            className="w-full h-auto max-w-[500px]"
          />
      
      ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4">
        {filteredHistory.map((oneOfHistory) => (
          <BookCard
              itemKey={oneOfHistory.key}
              bookId={oneOfHistory.key}
              cover_edition_key={oneOfHistory.cover_edition_key}
              title={oneOfHistory.title}
              author_name={oneOfHistory.author_name}
          />
        ))}
      </div>
      )}
    </div>
  );
};