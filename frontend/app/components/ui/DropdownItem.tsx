type Props = {
    text: string;
    value: any;
    onClick: (value: any) => void;
};

export const DropdownItem = ({ text, value, onClick }: Props) => {
    return (
        <button
        className="h-8 bg-none w-full text-left hover:opacity-50 text-on-background-container cursor-pointer px-2 text-ellipsis text-nowrap"
        onClick={() => onClick(value)}
        >
            {text}
        </button>
    );
};


export default DropdownItem;