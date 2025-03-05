import { ButtonHTMLAttributes } from 'react'

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    className?: string
}

export const FormButton: React.FC<FormButtonProps> = ({
    children,
    className,
    ...props
}) => {
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
