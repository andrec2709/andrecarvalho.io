import { Link } from "react-router";
import Heading from "./Heading";
import { useLang } from "~/contexts/LangContext";

type Props = {
    id: string;
    children: React.ReactNode;
    sourceHref: string;
    appHref: string;
};

export const ProjectHeading = ({ id, children, sourceHref, appHref }: Props) => {
    const { translations, i18n } = useLang();
    return (
        <div className="mb-6">
            <Heading id={id}>{children}</Heading>
            <Link to={sourceHref} target="_blank" className="body-link source">{i18n.t('portfolio.sourceCode')}</Link>
            <Link to={appHref} target="_blank" className="body-link source">{i18n.t('portfolio.checkOut')}</Link>
        </div>
    );
};

export default ProjectHeading;