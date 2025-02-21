import { Link } from 'react-router-dom'
import { Icon } from '../../../icon/icon'

export const ControlPanel = () => {
    return (
        <div className="heder-icons">
            <div className="icon-container cursor-pointer">
                <Icon className="icon-bg" icon={'bi-heart-fill icon-blue'} />
                <p className="icon-text">Избранное</p>
            </div>
            <div className="icon-container cursor-pointer">
                <Icon icon={'bi-cart-fill icon-blue'} className="icon-bg" />
                <p className="icon-text">Корзина</p>
            </div>
            <Link to="/login">
                <div className="icon-container cursor-pointer">
                    <Icon
                        icon={'bi-person-fill icon-blue'}
                        className="icon-bg"
                    />
                    <p className="icon-text">Войти</p>
                </div>
            </Link>
        </div>
    )
} 