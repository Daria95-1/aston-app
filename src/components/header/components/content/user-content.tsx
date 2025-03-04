import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTES, STORAGE_KEYS } from '@constants'
import { IconButton, Icon } from '@components';
import { selectUserLogin, logoutUser, selectUserSession } from '@slices/user-slice';
import { sessions } from '@bff';

export const UserContent: React.FC = () => {
    const dispatch = useDispatch();
    const login = useSelector(selectUserLogin);
    const session = useSelector(selectUserSession);

    const handleLogout = () => {
        dispatch(logoutUser());
        sessions.remove(session);
        sessionStorage.removeItem(`${STORAGE_KEYS.USER_DATA}`)
    };

    return (
        <>
            <Link to={ROUTES.FAVORITES}>
                <IconButton
                    icon="bi-heart-fill"
                    className="cursor-pointer"
                    text="Избранное"
                />
            </Link>
            <div className="flex items-center gap-[10px]">
                <IconButton icon="bi-person-fill" text={login} />
                <Icon
                    icon="bi-box-arrow-right text-[white] text-[20px] cursor-pointer"
                    onClick={handleLogout}
                />
            </div>
        </>
    );
};
