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
    const { translations } = useLang();
    return (
        <div className="mb-6">
            <Heading id={id}>{children}</Heading>
            <Link to={sourceHref} target="_blank" className="body-link source">{translations?.portfolio.source_code}</Link>
            <Link to={appHref} target="_blank" className="body-link source">{translations?.portfolio.checkout}</Link>
        </div>
    );
};

export default ProjectHeading;