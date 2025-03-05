type ValidationErrorProps = {
    className?: string
    children: React.ReactNode
}

export const ValidationError = ({
    className,
    children,
}: ValidationErrorProps) => {
    return (
        <div
            className={`text-[14px] font-[400] text-[#E91F1F] whitespace-wrap ${className}`}
        >
            {children}
        </div>
    )
}
