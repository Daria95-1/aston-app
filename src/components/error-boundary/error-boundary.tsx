import { useState } from 'react'

type ErrorBoundaryProps = {
    children: React.ReactNode
}

export const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
    const [hasError, setHasError] = useState(false)

    if (hasError) {
        return <h2>Произошла ошибка, пожалуйста, попробуйте позже.</h2>
    }

    return (
        <div
            // если в дочерних компонентах возникает ошибка
            onError={() => setHasError(true)}
        >
            {children}
        </div>
    )
}
