import { ErrorBoundary } from 'react-error-boundary'

const ErrorFallback = () => {
    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2>Произошла ошибка, пожалуйста, попробуйте позже...</h2>
        </div>
    )
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
