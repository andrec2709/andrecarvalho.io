import { useLang } from "~/contexts/LangContext";
import Section from "../layout/Section";
import Heading from "../ui/Heading";
import { Link } from "react-router";
import AddPaletteImg from '../../assets/images/colorpicker-create-project.png';
import AddColorImg from '../../assets/images/colorpicker-add-color.png';
import RenameColorImg from '../../assets/images/colorpicker-rename-color.png';
import ProjectHeading from "../ui/ProjectHeading";
import Paragraph from "../ui/Paragraph";
import type { SectionProps } from "~/domain/section/types";

type Props = SectionProps;

export const ColorpickerSection = ({ ...props }: Props) => {
    const { i18n } = useLang();

    return (
        <Section {...props}>
            <ProjectHeading
                id="colorpicker"
                sourceHref="https://github.com/andrec2709/colorpicker-react"
                appHref="https://andrec2709.github.io/colorpicker-react"
            >
                {i18n.t('colorpicker.heading')}                
            </ProjectHeading>
            <Heading id="what-is-colorpicker" as="h3" className="text-[1.5rem]">
                {i18n.t('colorpicker.whatIs.heading')}
            </Heading>
            <Paragraph>{i18n.t('colorpicker.whatIs.p1')}</Paragraph>
            <br />
            <Paragraph>{i18n.t('colorpicker.whatIs.p2')}</Paragraph>
            <br />
            <Paragraph>{i18n.t('colorpicker.whatIs.p3')}</Paragraph>
            <br />
            <Paragraph>{i18n.t('colorpicker.whatIs.p4')}</Paragraph>
            <br />
            <Heading id="technical-overview-colorpicker" as="h3" className="text-[1.5rem]">
                {i18n.t('colorpicker.techOverview.heading')}
            </Heading>
            <Paragraph>{i18n.t('colorpicker.techOverview.p1')}</Paragraph>
            <br />
            <Paragraph>{i18n.t('colorpicker.techOverview.p2')}</Paragraph>
            <br />
            <Paragraph>{i18n.t('colorpicker.techOverview.p3')}</Paragraph>
            <br />
            <Heading id="challenges-colorpicker" as="h3" className="text-[1.5rem]">
                {i18n.t('colorpicker.challenges.heading')}
            </Heading>
            <Paragraph>{i18n.t('colorpicker.challenges.p1')}</Paragraph>
            <br />
            <Paragraph>{i18n.t('colorpicker.challenges.p2')}</Paragraph>
            <br />
            <Paragraph>{i18n.t('colorpicker.challenges.p3')}</Paragraph>
            <br />
            <Paragraph>{i18n.t('colorpicker.challenges.p4')}</Paragraph>
            <br />
            <Paragraph>{i18n.t('colorpicker.challenges.p5')}</Paragraph>
            <br />
            <Paragraph>{i18n.t('colorpicker.challenges.p6')}</Paragraph>
            <br />
            <Heading id="conclusion-colorpicker" as="h3" className="text-[1.5rem]">
                {i18n.t('colorpicker.conclusion.heading')}
            </Heading>
            <Paragraph>{i18n.t('colorpicker.conclusion.p1')}</Paragraph>
        </Section>
    );
};

export default ColorpickerSection;