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
    const { i18n } = useLang();
    return (
        <Section classNameContainer={classNameContainer} classNameContent={classNameContent}>
            <Heading id="about-me">
                {i18n.t('about.aboutMe.heading')}
            </Heading>
            <p className="paragraph">{i18n.t('about.aboutMe.p1')}</p><br />
            <p className="paragraph">{i18n.t('about.aboutMe.p2')}</p>
            <Callout initialIsExpanded={false} title={i18n.t('words.note')} titleId="callout_01">
                {i18n.t('about.aboutMe.notePart1')}{" "}
                <Link to="/cv" className="body-link">{i18n.t('about.aboutMe.noteCvLink')}</Link>{" "}
                {i18n.t('about.aboutMe.notePart2')}
            </Callout>
        </Section>
    );
};

export default AboutMeSection;