import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/hooks';
import { Button, Icon, Modal } from '@components';
import { ROLE, STORAGE_KEYS } from '@constants';
import { selectUserRole, isBookFavorite, deleteFromFavorites, addToFavorites, selectUserFavorites } from '@slices/user-slice'
import { Book } from '@slices/books-slice';

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
    const favorites = useSelector(selectUserFavorites)
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const changeIcon = isFavorite ? 'bi-heart-fill' : 'bi-heart';
    const hoverIcon = 'bi-heart-fill';
    const [isHovered, setIsHovered] = useState(false);

    const addFavoriteButtonText = isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'

    useEffect(() => {
        sessionStorage.setItem(
            STORAGE_KEYS.FAVORITES_DATA,
            JSON.stringify(favorites)
        )
    }, [favorites])
   
    const addFavorite = async (bookId: string, isFavorite: boolean) => {
        if (isFavorite) {
            dispatch(deleteFromFavorites(bookId))
        } else {
            if (book) {
              dispatch(addToFavorites(book))
            }
        }
    }
    const handleClick = () => {
        if (isUserAuthorized) {
            addFavorite(book.key, isFavorite);
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