import { Link } from 'react-router-dom'
import { ROUTES } from '@constants'

export const Logo = () => {
    return (
        <Link className="logo-link" to={ROUTES.MAIN_PAGE}>
            <p className="text-[30px] font-[700] text-[white] cursor-pointer">
                BookShowcase
            </p>
        </Link>
    )
}
