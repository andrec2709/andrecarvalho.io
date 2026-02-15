import { useLang } from "~/contexts/LangContext";
import Heading from "../ui/Heading";
import { v4 as uuidv4 } from "uuid";
import Section from "../layout/Section";

type Props = {
    classNameContainer?: string; 
    classNameContent?: string;
};

export const SkillAssessmentSection = ({ classNameContainer, classNameContent }: Props) => {
    const { translations } = useLang();

    return (
        <Section classNameContainer={classNameContainer} classNameContent={classNameContent}>
            <Heading id="skill-assessment">
                {translations?.about.heading_2}
            </Heading>
            <p className="paragraph">{translations?.about.h2_p1}</p>
            <ul className="unordered">
                {
                    translations?.about.about_me_list_01_items // array of items from 1st list
                        .map((i: string) => <li key={uuidv4()}>{i}</li>)
                }
            </ul>
            <p className="paragraph">{translations?.about.h2_p2}</p>
            <br />
            <p className="paragraph">{translations?.about.h2_p3}</p>
            <ul className="unordered">
                {
                    translations?.about.about_me_list_02_items // array of items from 2nd list
                        .map((i: string) => <li key={uuidv4()}>{i}</li>)
                }
            </ul>
        </Section>

    );
};

