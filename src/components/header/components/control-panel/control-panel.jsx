import { Link } from 'react-router-dom'
import { LINKS } from '@constants/links'
import { IconButton } from '@components'

export const ControlPanel = () => {
    return (
        <div className="heder-icons">
            <IconButton icon="bi-heart-fill icon-blue" text="Избранное" />
            <IconButton icon="bi-cart-fill icon-blue" text="Корзина" />
            <Link to={LINKS.AUTH}>
                <IconButton icon="bi-person-fill icon-blue" text="Войти" />
            </Link>
        </div>
    )
} 