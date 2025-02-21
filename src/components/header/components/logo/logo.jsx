import { Link } from 'react-router-dom'

export const Logo = () => {
    return (
        <Link className="logo-link" to="/">
            <p className="logo cursor-pointer">BookShop</p>
        </Link>
    )
}
