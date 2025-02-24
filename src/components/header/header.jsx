import { Logo, ControlPanel } from './components'
import 'bootstrap-icons/font/bootstrap-icons.css'

export const Header = () => {
    return (
        <div className="header flex justify-center w-full h-[80px] bg-[#2B8AFF]">
            <div className="flex items-center justify-between w-[1536px]">
                <Logo />
                <ControlPanel />
            </div>
        </div>
    )
}