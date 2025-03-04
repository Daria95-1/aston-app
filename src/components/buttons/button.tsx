type ButtonProps = {
  variant?: 'check' | 'like' | 'filter';
  isActive?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export const Button = ({ variant = 'check', isActive = false, children, onClick, className = '' }: ButtonProps) => {
  const baseClasses = 'rounded';
  const variantClasses = {
    check: 'bg-[#2B8AFF] text-white px-3 py-2 w-48',
    like: 'text-[#2B8AFF] px-1 py-1 bg-white-600',
    filter: isActive
      ? 'px-2 py-2 border flex items-center text-white bg-[#2B8AFF]' 
      : 'px-2 py-2 border flex items-center text-blue-400 bg-white-600', 
  }[variant];

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
};