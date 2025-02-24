/** @format */

import { Link } from 'react-router-dom'
import { Icon } from '../../../icon/icon'

export const ControlPanel = () => {
    return (
        <div className="flex gap-[40px]">
            <div className="flex items-center gap-[15px]">
                <div className="flex w-[40px] h-[40px] bg-[white] rounded-full justify-center items-center">
                    <Icon icon={'bi-heart-fill text-[#2B8AFF]'} />
                </div>
                <p className="text-[white] text-[16px]">Избранное</p>
            </div>
            <div className="flex items-center gap-[15px] cursor-pointer">
                <div className="flex w-[40px] h-[40px] bg-[white] rounded-full justify-center items-center">
                    <Icon icon={'bi-cart-fill text-[#2B8AFF]'} />
                </div>
                <p className="text-[white] text-[16px]">Корзина</p>
            </div>
            <Link to="/login">
                <div className="flex items-center gap-[15px] cursor-pointer">
                    <div className="flex w-[40px] h-[40px] bg-[white] rounded-full justify-center items-center">
                        <Icon icon={'bi-person-fill text-[#2B8AFF]'} />
                    </div>
                    <p className="text-[white] text-[16px]">Войти</p>
                </div>
            </Link>
        </div>
    )
}
