import { Link } from "react-router";
import Heading from "./Heading";
import { useTranslation } from "react-i18next";

type Props = {
    id: string;
    children: React.ReactNode;
    sourceHref: string;
    appHref: string;
};

export const ProjectHeading = ({ id, children, sourceHref, appHref }: Props) => {
    const { t } = useTranslation();
    return (
        <div className="mb-6">
            <Heading id={id}>{children}</Heading>
            <Link to={sourceHref} target="_blank" className="body-link source">{t('portfolio.sourceCode')}</Link>
            <Link to={appHref} target="_blank" className="body-link source">{t('portfolio.checkOut')}</Link>
        </div>
    );
};

export default ProjectHeading;