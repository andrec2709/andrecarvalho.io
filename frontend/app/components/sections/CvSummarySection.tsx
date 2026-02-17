import { useLang } from "~/contexts/LangContext";
import Section from "../layout/Section";
import Heading from "../ui/Heading";

type Props = {
    classNameContainer?: string;
    classNameContent?: string;
};

export const CvSummarySection = ({ classNameContainer, classNameContent }: Props) => {
    const { translations, i18n } = useLang();
    return (
        <Section classNameContainer={classNameContainer} classNameContent={classNameContent}>
            <Heading as="h3" id="summary" className="text-2xl!">
                {i18n.t('cv.proSumm.heading')}
            </Heading>
            <p className="">
                {translations?.cv.pro_sum_desc_part1}
            </p>
            <br />
            <p className="">
                {translations?.cv.pro_sum_desc_part2}
            </p>
        </Section>
    );
};

export default CvSummarySection;