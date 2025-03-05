import  { useState } from 'react';
import { Button } from '@components'; 

type DescriptionProps = {
  text: string; 
  maxLength?: number; 
};

export const Description: React.FC<DescriptionProps> = ({ text, maxLength = 300 }) => {
  const [isAll, setIsAll] = useState(false);

  // Если текст короче maxLength, показываем его целиком без кнопки
  if (text.length <= maxLength) {
    return <p className="text-14">{text}</p>;
  }

  // Если текст длинный, показываем укороченную версию или полный текст
  const displayText = isAll ? text : `${text.slice(0, maxLength)}...`;

  return (
    <div className="w-[800px] flex flex-col gap-2">
      <p className="text-14">{displayText}</p>
      <Button 
        variant="displayText" 
        onClick={() => setIsAll(!isAll)}
        className="w-fit"
      >
        {isAll ? 'Скрыть' : 'Показать полностью'}
      </Button>
    </div>
  );
};