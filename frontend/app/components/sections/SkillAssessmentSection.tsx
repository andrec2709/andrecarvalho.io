import { useLang } from "~/contexts/LangContext";
import Heading from "../ui/Heading";
import { v4 as uuidv4 } from "uuid";
import Section from "../layout/Section";

type Props = {
    classNameContainer?: string; 
    classNameContent?: string;
};

export const SkillAssessmentSection = ({ classNameContainer, classNameContent }: Props) => {
    const { i18n } = useLang();

    return (
        <Section classNameContainer={classNameContainer} classNameContent={classNameContent}>
            <Heading id="skill-assessment">
                {i18n.t('about.skillAssessment.heading')}
            </Heading>
            <p className="paragraph">{i18n.t('about.skillAssessment.p1')}</p>
            <ul className="unordered">
                {
                    (i18n.t<string[]>('about.skillAssessment.firstSkillsList') as string[]) // array of items from 1st list
                        .map((i: string) => <li key={uuidv4()}>{i}</li>)
                }
            </ul>
            <p className="paragraph">{i18n.t('about.skillAssessment.p2')}</p>
            <br />
            <p className="paragraph">{i18n.t('about.skillAssessment.p3')}</p>
            <ul className="unordered">
                {
                    (i18n.t<string[]>('about.skillAssessment.secondSkillsList') as string[]) // array of items from 2nd list
                        .map((i: string) => <li key={uuidv4()}>{i}</li>)
                }
            </ul>
        </Section>

    );
};

