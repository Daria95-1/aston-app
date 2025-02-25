export const ValidationError = ({ className, children }) => {
    return (
        <div
            className={`text-[14px] font-[400] text-[#E91F1F] whitespace-wrap ${className}`}
        >
            {children}
        </div>
    )
}