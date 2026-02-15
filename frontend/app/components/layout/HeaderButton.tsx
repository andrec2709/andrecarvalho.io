
type Props = React.HTMLAttributes<HTMLButtonElement> & {
    text: string;
    onClick: () => void;
};

export const HeaderButton = ({text, onClick, ...props}: Props) => {

    return (
        <button 
        className={`rounded-2xl w-fit pt-1 pb-1 pl-3 pr-3 transition-[background-color, padding] 
            duration-100 ease-in-out text-nowrap cursor-pointer 
            hover:bg-primary-container  hover:text-on-primary-container active:bg-primary-container/80
            ${props.className}`}
        onClick={onClick}
        >
            {text}
        </button>
    );
};


export default HeaderButton;