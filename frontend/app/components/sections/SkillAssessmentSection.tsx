import Heading from "../ui/Heading";
import Section from "../layout/Section";
import { useTranslation } from "react-i18next";

type Props = {
    classNameContainer?: string;
    classNameContent?: string;
};

export const SkillAssessmentSection = ({ classNameContainer, classNameContent }: Props) => {
    const { t } = useTranslation();

    const tArray = (key: string) => {
        return t(key, { returnObjects: true }) as string[];
    };

    return (
        <Section classNameContainer={classNameContainer} classNameContent={classNameContent}>
            <Heading id="skill-assessment">
                {t('about.skillAssessment.heading')}
            </Heading>
            <p className="paragraph">{t('about.skillAssessment.p1')}</p>
            <ul className="unordered">
                {
                    tArray('about.skillAssessment.firstSkillsList') // array of items from 1st list
                        .map((i: string, index) => <li key={index}>{i}</li>)
                }
            </ul>
            <p className="paragraph">{t('about.skillAssessment.p2')}</p>
            <br />
            <p className="paragraph">{t('about.skillAssessment.p3')}</p>
            <ul className="unordered">
                {
                    tArray('about.skillAssessment.secondSkillsList') // array of items from 2nd list
                        .map((i: string, index) => <li key={index}>{i}</li>)
                }
            </ul>
        </Section>

    );
};

