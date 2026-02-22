import { useTranslation } from "react-i18next";
import { cn } from "~/utils";

export const ExpandIcon = ({ className, hoverText }: { className?: string; hoverText?: string }) => {
    const { t } = useTranslation();
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            aria-label={t('icons.expandIcon.label')}
            className={cn(`aspect-square`, className)}>
            <title>{hoverText}</title>
            <path d="M200-200v-240h80v160h160v80H200Zm480-320v-160H520v-80h240v240h-80Z" />
        </svg>
    );
};

export default ExpandIcon;