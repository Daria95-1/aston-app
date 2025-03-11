import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/hooks';
import { RootState } from '../../store';
import { Button, Icon, Modal } from '@components';
import { ROLE } from '@constants';
import { selectUserRole, isBookFavorite } from '@slices/user-slice'
import { Book } from '@slices/books-slice';
import { addBookToFavorites, removeBookFromFavorites } from '@bff/operation'

type FavoriteButtonProps = {
    book: Book;
    variant: string;
};

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
    book,
    variant
}) => {
    const dispatch = useAppDispatch();
    const userRole = useSelector(selectUserRole) as ROLE;
    const isUserAuthorized = userRole !== ROLE.GUEST;
    const isFavorite = useSelector(isBookFavorite(book.key));
    const [isModalOpen, setIsModalOpen] = useState(false);
    const changeIcon = isFavorite ? 'bi-heart-fill' : 'bi-heart';
    const hoverIcon = 'bi-heart-fill';
    const [isHovered, setIsHovered] = useState(false);
    const addFavoriteButtonText = isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'
    
    
    const addFavorite = async () => {
        try {
            if (isFavorite) {
                await removeBookFromFavorites(dispatch, book.key);
            } else {
                await addBookToFavorites(dispatch, book);
            }
        } catch (error) {
            console.error('Error in addFavorite', error);
        }
    };
    const handleClick = () => {
        if (isUserAuthorized) {
            addFavorite();
        }
        else {
            setIsModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleMouse = () => {
        if (isHovered){
            setIsHovered(false);
        }
        else {
            setIsHovered(true);
        }
    };
    if (variant === "like"){
        return (
            <div>
                <Button variant="like" 
                    onClick={handleClick}
                    onMouseEnter={handleMouse}
                    onMouseLeave={handleMouse}>
                    <Icon className={isHovered ? hoverIcon : changeIcon} />
                </Button>
                <Modal isOpen={isModalOpen} onClose={handleCloseModal}/>
            </div>
        );
    }
    else{
        return (
            <div>
                <Button variant="check" className="w-full mt-6 "
                onClick={handleClick} >
                    <div className="flex items-center justify-center" style={{gap:'4px'}}>
                        {addFavoriteButtonText}
                        <Icon className={changeIcon}  />
                    </div>
                </Button>
                <Modal isOpen={isModalOpen} onClose={handleCloseModal}/>
            </div>

        );
    }
};