import { Link, useLocation } from "react-router";
import LinkIcon from "./icons/LinkIcon";
import { type JSX } from "react";
import { cn } from "~/utils";
import { useTranslation } from "react-i18next";

export const Heading = ({ id, className, as: Tag = "h2", children }: {
    id: string;
    className?: string;
    children: React.ReactNode;
    as?: keyof JSX.IntrinsicElements;
}) => {
    const location = useLocation();
    const href = `${document.URL}`;
    const { t } = useTranslation();

    const handleCopy = async () => {
        const cleanLink = href.replace(/#.*/, '');
        const copy = cleanLink.concat(`#${id}`);
        await navigator.clipboard.writeText(copy);
    };

    return (
        <Tag
            id={id}
            className={cn(`text-[2rem] max-w-[600px] mx-auto w-full text-on-background scroll-mt-14 font-medium my-4`, className)}
        >
            {children}&nbsp;
            <Link
                to={`${location.pathname}#${id}`}
                className="opacity-10 hover:opacity-100 active:opacity-50 text-body-links"
                onClick={handleCopy}
                title={t('general.headingCopyHoverTxt')}
            >
                <LinkIcon className="fill-body-links -rotate-45 print:hidden" />
            </Link>
        </Tag>
    );
};

export default Heading;