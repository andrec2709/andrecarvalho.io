import { useLang } from "~/contexts/LangContext";
import Heading from "../ui/Heading";
import Callout from "../ui/Callout";
import { Link } from "react-router";
import Section from "../layout/Section";

type Props = {
    classNameContainer?: string; 
    classNameContent?: string;
};

export const AboutMeSection = ({ classNameContainer, classNameContent }: Props) => {
    const { translations } = useLang();
    return (
        <Section classNameContainer={classNameContainer} classNameContent={classNameContent}>
            <Heading id="about-me">
                {translations?.about.heading_1}
            </Heading>
            <p className="paragraph">{translations?.about.about_me_p_1}</p><br />
            <p className="paragraph">{translations?.about.about_me_p_2}</p>
            <Callout initialIsExpanded={false} title={translations?.words.note} titleId="callout_01">
                {translations?.about.about_me_note_1_part1}{" "}
                <Link to="/cv" className="body-link">{translations?.about.about_me_note_1_cv_link}</Link>{" "}
                {translations?.about.about_me_note_1_part2}
            </Callout>
        </Section>
    );
};

export default AboutMeSection;