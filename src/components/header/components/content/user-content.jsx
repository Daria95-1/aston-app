import { useDispatch, useSelector } from 'react-redux'
import { logout } from '@actions'
import { IconButton, Icon } from '@components'
import { selectUserLogin, selectUserSession } from '@selectors'

export const UserContent = () => {
    const dispatch = useDispatch()
    const login = useSelector(selectUserLogin)
    const session = useSelector(selectUserSession)

    return (
        <div className="flex items-center gap-[10px]">
            <IconButton icon="bi-person-fill" text={login} />
            <Icon
                icon="bi-box-arrow-right text-[white] text-[20px] cursor-pointer"
                onClick={() => dispatch(logout(session))}
            />
        </div>
    )
}