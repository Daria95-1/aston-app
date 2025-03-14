type ButtonProps = {
  variant?: 'check' | 'like' | 'filter';
  isActive?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  onMouseEnter?: () => void; 
  onMouseLeave?: () => void;
  dataFilter?: string;
} 

export const Button = ({ variant = 'check', isActive = false, children, onClick, className = '', dataFilter, onMouseEnter, onMouseLeave }: ButtonProps) => {
  const baseClasses = ' hover:text-[#2B8AFF]  rounded-lg border border-transparent transition-colors hover:border-[#2B8AFF] focus:outline-none focus-visible:outline-[4px] focus-visible:outline-[#2B8AFF] cursor-pointer';
  const variantClasses = {
      check: 'bg-[#2B8AFF] text-white hover:bg-white hover:text-[#2B8AFF] border px-15 py-2 transition-colors focus:outline-none focus-visible:outline-[4px]',
      like: 'text-[#2B8AFF] hover:text-[#2B8AFF] px-4 py-2 bg-white absolute top-1 right-1 text-xl hover:text-2xl border-none',
      displayText: 'text-[#2B8AFF] p-2',
      filter: isActive
          ? 'px-2 py-2 border flex items-center text-white bg-[#2B8AFF] hover:text-white'
          : 'px-2 py-2 border flex items-center text-[#2B8AFF] bg-white-600',
  }[variant]

  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter} 
      onMouseLeave={onMouseLeave}
      className={`${baseClasses} ${variantClasses} ${className}`}
      data-filter={dataFilter}
      
    >
      {children}
    </button>
  );
};