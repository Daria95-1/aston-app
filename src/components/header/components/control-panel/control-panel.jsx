import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ROLE, LINKS } from '@constants'
import { IconButton, Icon } from '@components'
import { selectUserRole, selectUserLogin, selectUserSession } from '@selectors'
import { logout } from '@actions'

export const ControlPanel = () => {
    const dispatch = useDispatch()
    const roleId = useSelector(selectUserRole)
    const login = useSelector(selectUserLogin)
    const session = useSelector(selectUserSession)

    console.log('roleId:', roleId)
    console.log('login:', login)
    console.log('session:', session)

    const guestContent = (
        <Link to={LINKS.AUTH}>
            <IconButton icon="bi-person-fill" text="Войти" />
        </Link>
    )

    const userContent = (
        <div className="flex items-center gap-[10px]">
            <IconButton icon="bi-person-fill" text={login} />
            <Icon
                icon="bi-box-arrow-right text-[white] text-[20px] cursor-pointer"
                onClick={() => dispatch(logout(session))}
            />
        </div>
    )

    const displayContent = roleId === ROLE.GUEST ? guestContent : userContent

    return (
        <div className="flex gap-[40px]">
            <IconButton
                icon="bi-heart-fill"
                className={'cursor-pointer'}
                text="Избранное"
            />
            {displayContent}
        </div>
    )
}
