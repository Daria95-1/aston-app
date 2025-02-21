import 'bootstrap-icons/font/bootstrap-icons.css'
import { ControlPanel, Logo } from './components'

export const Header = () => {
    return (
        <div className="fixed z-10 mainBlue w-full">
            <div className="flex flex-col items-center justify-between mx-auto minDesktop:w-[1280px] desktop:w-[1536px] pt-2 pr-6 pb-2 pl-6">
                <Logo />
                <ControlPanel />
            </div>
        </div>
    )
}
