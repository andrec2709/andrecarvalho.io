import { useLang } from "~/contexts/LangContext";
import Section from "../layout/Section";
import Heading from "../ui/Heading";
import type { SectionProps } from "~/domain/section/types";

type Props = {
    classNameContainer?: string;
    classNameContent?: string;
};

export const CvSummarySection = ({ ...props }: SectionProps) => {
    const { translations, i18n } = useLang();
    return (
        <Section {...props}>
            <Heading as="h3" id="summary" className="text-2xl!">
                {i18n.t('cv.proSumm.heading')}
            </Heading>
            <p>
                {translations?.cv.pro_sum_desc_part1}
            </p>
            <br />
            <p>
                {translations?.cv.pro_sum_desc_part2}
            </p>
        </Section>
    );
};

export default CvSummarySection;