import {  Description, Tags, Characteristic } from '@components'; 

type ItemContentProps = {
  description: string; 
  title: string;
  author: string;
  year: string;
  tags: string[];
};

export const ItemContent: React.FC<ItemContentProps> = ({ description,  title, author, year, tags }) => {

  return (
    <div className="flex flex-col gap-4 w-[800px]">
      <Description description={description} />
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold mb-2">Характеристики</h2>
        <div className="flex flex-col gap-5">
          <Characteristic name={'Заголовок'} characteristic={title} characteristicUnknown={'заголовок не найден'} />
          <Characteristic name={'Автор'} characteristic={author} characteristicUnknown={'автор не известен'} />
          <Characteristic name={'Год'} characteristic={year} characteristicUnknown={'год не известен'} />
          <Tags tags={tags} />
        </div>
        
      </div>
    </div>
  );
};