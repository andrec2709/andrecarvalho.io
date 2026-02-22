import { useTranslation } from "react-i18next";
import type { IconProps } from "~/types/icon";
import { cn } from "~/utils";

type Props = Omit<IconProps, 'variant' | 'className'> & {
    hoverText?: string;
    className?: string;
};

export const OpenNewIcon = ({ className = '', size = 24, hoverText = '', ...props }: Props) => {
    const { t } = useTranslation();

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            aria-label={t('icons.openExternalIcon.label')}
            height={size}
            {...props}
            className={cn(`aspect-square cursor-pointer hover:scale-150 transition-transform duration-100 ease`, className)}
        >
            <title>{hoverText}</title>
            <path
                d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"
            />
        </svg>
    );
};

export default OpenNewIcon;