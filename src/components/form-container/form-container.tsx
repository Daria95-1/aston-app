import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type FormContainerProps = {
    children: ReactNode
    linkTo: string
    linkText: string
}

export const FormContainer: FC<FormContainerProps> = ({
    children,
    linkTo,
    linkText,
}) => {
    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center text-center rounded-[4px] form-shadow">
                {children}
            </div>
            <Link className="text-[15px] font-[400] mt-[30px]" to={linkTo}>
                {linkText}
            </Link>
        </div>
    )
}
