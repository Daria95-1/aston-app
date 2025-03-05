import { Link } from 'react-router-dom'
import { IconButton } from '@components'
import { ROUTES } from '@constants'

export const GuestContent: React.FC = () => {
    return (
        <Link to={ROUTES.LOGIN}>
            <IconButton icon="bi-person-fill" text="Войти" />
        </Link>
    )
}
