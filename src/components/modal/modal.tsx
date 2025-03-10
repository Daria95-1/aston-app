import { Button } from '@components'
import { Link } from 'react-router-dom'
import { ROUTES } from '@constants'

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#2B8AFF] bg-[rgba(43,138,255,0.5)] flex items-center justify-center z-50">
        <div className="bg-white p-4 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-2 text-[#2B8AFF]">{title}</h2>
            
            <div className="flex flex-col column justify-end space-x-2">
            <span className='mb-5'>Для добавления книги в <span className='font-bold'>избранное</span> необходимо <Link className="logo-link" to={ROUTES.LOGIN}>авторизоваться</Link>.</span>
            <Button
                variant="check"
                onClick={onClose}
                className=" bg-[#2B8AFF] hover:bg-white hover:text-[#2B8AFF] px-1 py-1 "
                >
                Закрыть
            </Button>
        </div>
        </div>
    </div>
  );
};