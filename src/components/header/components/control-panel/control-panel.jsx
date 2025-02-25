import { Link } from 'react-router-dom'
import { LINKS } from '@constants/links'
import { IconButton } from '@components'

export const ControlPanel = () => {
    return (
        <div className="flex gap-[40px]">
            <IconButton icon="bi-heart-fill" text="Избранное" />
            <IconButton icon="bi-cart-fill" text="Корзина" />
            <Link to={LINKS.AUTH}>
                <IconButton icon="bi-person-fill" text="Войти" />
            </Link>
        </div>
    )
}
