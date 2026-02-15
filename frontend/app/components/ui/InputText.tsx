import { twMerge } from "tailwind-merge";


type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const InputText = ({
    placeholder = '',
    type = 'text',
    className = '',
    required = false,
    name = '',
    id = '',
    ...rest
}: Props) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            required={required}
            name={name}
            id={id}
            className={twMerge(`outline-0 bg-input-background text-input-on-background 
        focus:border-input-border border border-input-border/30 placeholder:text-input-on-background/70 rounded-sm px-2 py-1`, className)}
            {...rest}
        />
    );
};

export default InputText;