import { Icon } from '@components'


export const IconButton = ({ icon, text }) => {
    return (
        <div className="icon-container cursor-pointer">
            <Icon className="icon-bg" icon={icon} />
            <p className="icon-text">{text}</p>
        </div>
    )
} 