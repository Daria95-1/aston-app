import { Button, Icon } from '@components'

type BookCardProps = {
  id: number;
  price: number;
  title: string;
  author: string;
  image: string; 
}


const BookCard: React.FC<BookCardProps> = ({ price, title, author, image }) => {
  return (
    <div className="border border-gray-300 rounded p-2 text-center">
      <img src={image} alt={title} className="w-full h-80 object-cover mb-2" />
      <p className="font-bold">{price} Р</p>
      <p>{title}</p>
      <p className="text-sm text-gray-600">{author}</p>
      <div className="mt-2 flex justify-center items-center space-x-2">
        <Button variant="check">Подробнее</Button>
        <Button variant="like">
                  <Icon className={'bi-heart'} />
        </Button>
      </div>
    </div>
  );
};

export  { BookCard };