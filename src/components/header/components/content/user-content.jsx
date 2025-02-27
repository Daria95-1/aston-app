import { useDispatch, useSelector } from 'react-redux'
import { IconButton, Icon } from '@components'
import { selectUserLogin, logoutUser } from '@slices'

export const UserContent = () => {
    const dispatch = useDispatch()
    const login = useSelector(selectUserLogin)

    const handleLogout = () => {
        dispatch(logoutUser())
    }

    return (
        <div className="flex items-center gap-[10px]">
            <IconButton icon="bi-person-fill" text={login} />
            <Icon
                icon="bi-box-arrow-right text-[white] text-[20px] cursor-pointer"
                onClick={handleLogout}
            />
        </div>
    )
}