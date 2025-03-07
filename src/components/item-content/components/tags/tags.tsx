import { useState } from 'react';
import { Button, Characteristic } from '@components';

type TagsProps = {
  tags: string[] | undefined; 
  maxTags: number; 
};

export const Tags: React.FC<TagsProps> = ({ tags = [], maxTags = 5 }) => {
  const [isAll, setIsAll] = useState(false);
  const safeTags = Array.isArray(tags) ? tags : [];  
  
  if (safeTags.length === 0) {
    return (
        <Characteristic name={'tags'} characteristic={undefined} characteristicUnknown={'не найдено'} />
    );
  }
  if (safeTags.length <= maxTags) {
    return (
    <div>
        <div className="flex items-baseline gap-2"> 
            <span className="text-14 text-gray-800">tags:</span> 
            <div className="flex flex-wrap gap-2"> 
                {safeTags.map((tag, index) => (
                <span key={index} className="bg-[#2B8AFF] text-white rounded-full px-2 py-1 font-bold">
                    {tag}
                </span>
                ))}
            </div>
        </div>
        
    </div>
    );
  }

  const displayTags = isAll ? tags : tags.slice(0, maxTags);

  return (
    <div>
        <div className="flex items-baseline gap-2 mb-5 mt-3"> 
            <span className="text-14 text-gray-800">tags:</span> 
            <div className="flex flex-wrap gap-2"> 
                {displayTags.map((tag, index) => (
                <span key={index} className="bg-[#2B8AFF] text-white rounded-full px-2 py-1 font-bold">
                    {tag}
                </span>
                ))}
            </div>
        </div>
        <Button
            variant="displayText"
            onClick={() => setIsAll(!isAll)}
            className="w-fit mt-2"
        >
            {isAll ? 'Скрыть' : `Показать еще (${tags.length - maxTags})`}
        </Button>
    </div>
  );
};