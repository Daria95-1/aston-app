import { Icon } from '@components'

type IconButtonProps = {
    icon: string
    text: string
    className?: string
}

export const IconButton: React.FC<IconButtonProps> = ({
    icon,
    text,
    className = '',
}) => {
    return (
        <div className={`flex items-center gap-[15px] ${className}`}>
            <div className="flex w-[40px] h-[40px] bg-[white] rounded-full justify-center items-center">
                <Icon className="text-[#2B8AFF]" icon={icon} />
            </div>
            <p className="text-[white] text-[16px]">{text}</p>
        </div>
    )
}
