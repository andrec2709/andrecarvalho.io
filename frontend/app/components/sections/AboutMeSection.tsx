import Heading from "../ui/Heading";
import Callout from "../ui/Callout";
import { Link } from "react-router";
import Section from "../layout/Section";
import { useTranslation } from "react-i18next";

type Props = {
    classNameContainer?: string; 
    classNameContent?: string;
};

export const AboutMeSection = ({ classNameContainer, classNameContent }: Props) => {
    const {t} = useTranslation();
    return (
        <Section classNameContainer={classNameContainer} classNameContent={classNameContent}>
            <Heading id="about-me">
                {t('about.aboutMe.heading')}
            </Heading>
            <p className="paragraph">{t('about.aboutMe.p1')}</p><br />
            <p className="paragraph">{t('about.aboutMe.p2')}</p>
            <Callout initialIsExpanded={false} title={t('words.note')} titleId="callout_01">
                {t('about.aboutMe.notePart1')}{" "}
                <Link to="/cv" className="body-link">{t('about.aboutMe.noteCvLink')}</Link>{" "}
                {t('about.aboutMe.notePart2')}
            </Callout>
        </Section>
    );
};

export default AboutMeSection;