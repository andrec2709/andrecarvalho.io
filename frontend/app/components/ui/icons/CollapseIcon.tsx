import { useTranslation } from "react-i18next";
import { cn } from "~/utils";

export const CollapseIcon = ({ className, hoverText }: { className?: string; hoverText?: string }) => {
    const { t } = useTranslation();

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            aria-label={t('icons.collapseIcon.label')}
            className={cn(`aspect-square`, className)}>
            <title>{hoverText}</title>
            <path d="M440-440v240h-80v-160H200v-80h240Zm160-320v160h160v80H520v-240h80Z" />
        </svg>
    );
};

export default CollapseIcon;