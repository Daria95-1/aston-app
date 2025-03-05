type IconProps = {
    className?: string
    icon: string
    onClick?: () => void
}

export const Icon: React.FC<IconProps> = ({ className, icon, onClick }) => (
    <div className={className} onClick={onClick}>
        <i className={`bi ${icon}`} aria-hidden="true"></i>
    </div>
)
