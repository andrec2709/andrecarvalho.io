import { useEffect, useRef, useState } from 'react';
import DropdownItem from './DropdownItem';
import DropdownIcon from './icons/DropdownIcon';

export type DropdownOptions = {
    text: string;
    value: any;
};

type Props = React.HTMLAttributes<HTMLDivElement> & {
    value: any;
    options: DropdownOptions[];
    onClick: (newValue: any) => void;
};

export const Dropdown = ({ value, options, onClick, ...props }: Props) => {
    const [visible, setVisible] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const optionsRef = useRef<HTMLDivElement>(null);

    const optComponents = options.map(opt => <DropdownItem text={opt.text} value={opt.value} onClick={onClick} key={opt.value} />);


    function handleCloseDropdown(e: PointerEvent) {
        setVisible(false);
    }

    useEffect(() => {
        if (visible) {
            document.addEventListener('click', handleCloseDropdown);
        }

        return () => {
            document.removeEventListener('click', handleCloseDropdown);
        };
    }, [visible, dropdownRef.current, optionsRef.current]);

    return (
        <div
            className={`dropdown-container relative text-sm w-fit max-w-30 hover:bg-primary-container hover:text-on-primary-container transition-[background-color] duration-100 ease-in-out ${props.className}`}
            ref={dropdownRef}
        >
            <button
                className={`dropdown--active cursor-pointer flex gap-x-3 items-center justify-between w-full h-fit text-nowrap rounded-xs px-1`}
                onClick={() => setVisible(!visible)}
            >
                <span className='text-ellipsis overflow-hidden mr-auto'>{value}</span>
                <DropdownIcon className={`w-[15px] aspect-square ${visible ? '' : '-rotate-180'} ml-auto transition-transform duration-100 ease`}/>
            </button>
            <div
                ref={optionsRef}
                className={`dropdown__list ${visible ? 'flex' : 'hidden'} z-999 flex-col items-start absolute w-30 min-w-14 max-w-30 overflow-x-hidden text-nowrap text-ellipsis bg-background-container h-fit max-h-15 rounded-b-sm overflow-y-scroll no-scrollbar`}
            >
                {optComponents}
            </div>
        </div>
    );
};

export default Dropdown;