import { Logo, ControlPanel } from './components'
import 'bootstrap-icons/font/bootstrap-icons.css'

export const Header: React.FC = () => {
    return (
        <header className="flex bg-[#2B8AFF] text-[white] p-4 text-center w-screen fixed top-[0] left-[0] right-[0] justify-center">
            <div className="flex items-center justify-between w-[1536px]">
                <Logo />
                <ControlPanel />
            </div>
        </header>
    )
}
