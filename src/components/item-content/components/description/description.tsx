import  { useState } from 'react';
import { Button } from '@components'; 

type DescriptionProps = {
  description: string; 
  maxLength: number;
};

export const Description: React.FC<DescriptionProps> = ({ description, maxLength = 300 }) => {
  const [isAll, setIsAll] = useState(false);

  const handleAllDescription = () => {
    setIsAll(!isAll);
  };

  if (description.length <= maxLength) {
    return (
        <div>
          <h2 className="text-2xl font-bold mb-2">Описание</h2>
          <span className="text-14">{description}</span>
        </div>
        
    );
  }

  
  const displayText = isAll ? description : `${description.slice(0, maxLength)}...`;

  return (
      <div>
        <h2 className="text-2xl font-bold mb-2">Описание</h2>
        <span className="text-14 leading-[1.5]">{displayText}</span>
        <Button 
          variant="displayText" 
          onClick={handleAllDescription}
          className="w-fit"
        >
          {isAll ? 'Скрыть' : 'Показать полностью'}
        </Button>
      </div>
      
  );
};