import { Link } from 'react-router-dom'

export const Logo = () => {
    return (
        <Link className="logo-link" to="/">
            <p className="text-[30px] font-[700] text-[white] cursor-pointer">
                BookShop
            </p>
        </Link>
    )
}
