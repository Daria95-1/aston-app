type ButtonProps = {
  variant?: 'check' | 'like' | 'filter';
  isActive?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  onMouseEnter?: () => void; 
  onMouseLeave?: () => void;
};

export const Button = ({ variant = 'check', isActive = false, children, onClick, className = '', onMouseEnter, onMouseLeave }: ButtonProps) => {
  const baseClasses = ' hover:text-[#2B8AFF]  rounded-lg border border-transparent transition-colors hover:border-[#646cff] focus:outline-none focus-visible:outline-[4px] focus-visible:outline-[#646cff]';
  const variantClasses = {
    check: 'bg-[#2B8AFF] text-white hover:bg-white hover:text-[#2B8AFF]  border border-transparent px-15 py-2 transition-colors hover:border-[#646cff] focus:outline-none focus-visible:outline-[4px] focus-visible:outline-[#646cff]',
    like: 'text-[#2B8AFF] hover:text-[#2B8AFF] px-4 py-2 bg-white absolute top-1 right-1 text-3xl hover:text-5xl',
    displayText: 'text-[#2B8AFF]',
    filter: isActive
      ? 'px-2 py-2 border flex items-center text-white bg-[#2B8AFF]' 
      : 'px-2 py-2 border flex items-center text-[#2B8AFF] bg-white-600', 
  }[variant];

  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter} 
      onMouseLeave={onMouseLeave}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
};