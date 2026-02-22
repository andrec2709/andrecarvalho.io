import { useState } from "react";
import StylusIcon from "./icons/StylusIcon";
import CollapseIcon from "./icons/CollapseIcon";
import ExpandIcon from "./icons/ExpandIcon";
import { useTranslation } from "react-i18next";
import { cn } from "~/utils";

type Props = {
    type?: string;
    title: string;
    titleId: string;
    children: React.ReactNode;
    initialIsExpanded?: boolean;
};

export const Callout = ({ type = 'note', title, titleId, children, initialIsExpanded = true }: Props) => {
    const [isExpanded, setIsExpanded] = useState(initialIsExpanded);
    const [isHovering, setIsHovering] = useState(false);
    const { t } = useTranslation();

    let typeIcon;
    switch (type) {
        case 'note':
            typeIcon = <StylusIcon className="fill-callout-note-icons w-7" />;
            break;
    }

    return (
        <div
            className={cn(`callout-container relative w-[clamp(200px,500px,90vw)] h-fit text-wrap wrap-break-word px-5 py-3 mt-10 mb-10 rounded-2x bg-callout-note-background border border-callout-note-border rounded-2xl flex flex-col items-start text-left`,  isExpanded && 'min-h-[150px]')}
        >
            <button
                className="callout__header flex items-center gap-x-2 w-full h-fit cursor-pointer"
                onClick={e => setIsExpanded(!isExpanded)}
                onPointerEnter={() => setIsHovering(true)}
                onPointerLeave={() => setIsHovering(false)}
            >
                {typeIcon}
                <p id={titleId} className="w-[80%] mr-auto wrap-break-word text-left text-wrap text-xl text-callout-note-on-background">{title}</p>
                {
                    isExpanded
                        ? <CollapseIcon
                            className={cn("fill-callout-note-icons w-6 transition-transform duration-100 ease", isHovering && 'scale-150')}
                            hoverText={t('callout.collapseHoverTxt')}
                        />
                        : <ExpandIcon
                            className={cn("fill-callout-note-icons w-6 transition-transform duration-100 ease", isHovering && 'scale-150')}
                            hoverText={t('callout.expandHoverTxt')}
                        />
                }
            </button>
            <p className={cn(`mt-5 mb-auto w-full text-callout-note-on-background`, isExpanded ? 'block' : 'hidden')}>{children}</p>
        </div>
    );
};

export default Callout;