import { Link } from "react-router";
import Section from "../layout/Section";
import Heading from "../ui/Heading";
import { useLang } from "~/contexts/LangContext";

type Props = {
    classNameContainer?: string;
    classNameContent?: string;
};

export const CvContactSection = ({classNameContainer, classNameContent}: Props) => {
    const { translations } = useLang();
    return (
        <Section classNameContainer={classNameContainer} classNameContent={classNameContent}>
            <Heading id="contact" as="h3" className="text-2xl!">
                {translations?.cv.contact}
            </Heading>
            <p className=""><strong>E-mail:</strong> <Link to="mailto:contato@andrecarvalho.io" className="body-link">contato@andrecarvalho.io</Link></p>
            <p className=""><strong>{translations?.cv.phone}</strong> +55 41 99678-5605</p>
            <p className=""><strong>LinkedIn:</strong> <Link to="https://linkedin.com/in/andrecarvalhofilho" target="_blank" className="body-link">/in/andrecarvalhofilho</Link></p>
            <p className=""><strong>{translations?.cv.location}</strong> {translations?.cv.location_val}</p>
        </Section>
    );
};

export default CvContactSection;