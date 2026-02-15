
export const Label = ({ children, htmlFor, className = '', ...rest }: React.LabelHTMLAttributes<HTMLLabelElement>) => {
    return (
        <label
            htmlFor={htmlFor}
            className={`${className}`}
            {...rest}
        >
            {children}
        </label>
    );
};

export default Label;