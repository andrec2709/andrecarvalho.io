
export const Button = ({ children, className = '', ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
            className={`bg-primary text-on-primary px-4 py-2 
            transition-all duration-70 ease rounded-sm 
            active:bg-primary/50 hover:bg-primary/80 border border-transparent
            active:border-primary-light ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;