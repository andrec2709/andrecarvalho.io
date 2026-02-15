import { Link, useLocation } from "react-router";
import LinkIcon from "./icons/LinkIcon";
import { useLang } from "~/contexts/LangContext";
import { useMemo, type JSX } from "react";

export const Heading = ({ id, className, as: Tag = "h2", children }: { 
    id: string; 
    className?: string;
    children: React.ReactNode;
    as?: keyof JSX.IntrinsicElements;
}) => {
    const location = useLocation();
    const href = `${document.URL}`;
    const { translations } = useLang();

    const handleCopy = async () => {
        const copy = href.includes(`#${id}`) ? href : `${href}#${id}`;
        await navigator.clipboard.writeText(copy);
    };

    return (
        <Tag 
        id={id} 
        className={`text-[2rem] max-w-[600px] mx-auto w-full text-on-background scroll-mt-14 font-medium my-4 ${className}`}
        >
            {children}&nbsp;
            <Link
                to={`${location.pathname}#${id}`}
                className="opacity-10 hover:opacity-100 active:opacity-50 text-body-links"
                onClick={handleCopy}
                title={translations?.general.heading_title_copy}
            >
                <LinkIcon className="fill-body-links -rotate-45 print:hidden" />
            </Link>
        </Tag>
    );
};

export default Heading;