import { Link } from 'react-router-dom'
import { LINKS } from '@constants/links'

export const Logo = () => {
    return (
        <Link className="logo-link" to={LINKS.MAIN_PAGE}>
            <p className="text-[30px] font-[700] text-[white] cursor-pointer">BookShop</p>
        </Link>
    )
}
