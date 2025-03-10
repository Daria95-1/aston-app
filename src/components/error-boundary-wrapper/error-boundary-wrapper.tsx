import { ErrorBoundary } from 'react-error-boundary'

const ErrorFallback = () => {
    return <h2>Произошла ошибка, пожалуйста, попробуйте позже.</h2>
}

type ErrorBoundaryWrapperProps = {
    children: React.ReactNode
}

export const ErrorBoundaryWrapper: React.FC<ErrorBoundaryWrapperProps> = ({
    children,
}) => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            {children}
        </ErrorBoundary>
    )
}
