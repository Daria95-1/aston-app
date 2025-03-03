export const FormButton = ({ children, className, ...props }) => {
	return (
        <button
            className={`flex items-center justify-center disabled:bg-[#84BCFF] disabled:cursor-not-allowed ${className}`}
            type="submit"
            {...props}
        >
            {children}
        </button>
    )
}