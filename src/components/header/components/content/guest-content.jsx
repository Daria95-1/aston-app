import { Link } from 'react-router-dom'
import { IconButton } from '@components'
import { LINKS } from '@constants'

export const GuestContent = () => {
    return (
        <Link to={LINKS.AUTH}>
            <IconButton icon="bi-person-fill" text="Войти" />
        </Link>
    )
}
