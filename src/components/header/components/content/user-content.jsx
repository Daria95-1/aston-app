import { useDispatch, useSelector } from 'react-redux'
import { IconButton, Icon } from '@components'
import { selectUserLogin, logoutUser, selectUserSession } from '@slices'
import { sessions } from '../../../../bff/sessions'

export const UserContent = () => {
    const dispatch = useDispatch()
    const login = useSelector(selectUserLogin)
    const session = useSelector(selectUserSession)

    const handleLogout = () => {
        dispatch(logoutUser())

        sessions.remove(session)

        sessionStorage.removeItem('userData')
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