type ButtonProps = {
  variant?: 'check' | 'like' | 'filter';
  isActive?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export const Button = ({
    variant = 'check',
    isActive = false,
    children,
    onClick,
    className = '',
}: ButtonProps) => {
    const baseClasses = 'rounded'
    const variantClasses = {
        check: 'bg-blue-600 text-white px-3 py-2',
        like: 'text-blue-400 px-1 py-1',
        filter: isActive
            ? 'px-2 py-2 border flex items-center text-white bg-blue-600'
            : 'px-2 py-2 border flex items-center text-blue-400 bg-white',
    }[variant]

    return (
        <button
            onClick={onClick}
            className={`${baseClasses} ${variantClasses} ${className}`}
        >
            {children}
        </button>
    )
}