import { Link } from 'react-router-dom'
import { LINKS } from '@constants/links'

export const Logo = () => {
    return (
        <Link className="logo-link" to={LINKS.MAIN_PAGE}>
            <p className="logo cursor-pointer">BookShop</p>
        </Link>
    )
}
