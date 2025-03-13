import { useState } from 'react';
import { Button, Characteristic } from '@components';

type TagsProps = {
  tags?: string[];
  maxTags: number;
};

export const Tags: React.FC<TagsProps> = ({ tags = [], maxTags = 5 }) => {
  const [isAll, setIsAll] = useState(false);
  const safeTags = Array.isArray(tags) ? tags : [];

  const handleAllTags = () => {
    setIsAll(!isAll);
  };

  if (!safeTags.length) {
    return <Characteristic name={'tags'} characteristicUnknown={'не найдено'} />;
  }

  const displayTags = safeTags.length <= maxTags || isAll ? safeTags : safeTags.slice(0, maxTags);
  const showButton = safeTags.length > maxTags;

  return (
    <div>
      <div className="flex items-baseline gap-2 mb-5">
        <span className="text-14 text-gray-800">tags:</span>
        <div className="flex flex-wrap gap-2">
          {displayTags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#2B8AFF] text-white rounded-full px-2 py-1 font-bold"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      {showButton && (
        <Button
          variant="displayText"
          onClick={handleAllTags}
          className="w-fit mt-2"
        >
          {isAll ? 'Скрыть' : `Показать еще (${safeTags.length - maxTags})`}
        </Button>
      )}
    </div>
  );
};