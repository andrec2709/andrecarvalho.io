import Section from "../layout/Section";
import Heading from "../ui/Heading";
import ProjectHeading from "../ui/ProjectHeading";
import Paragraph from "../ui/Paragraph";
import type { SectionProps } from "~/domain/section/types";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Code from "../ui/Code";

type Props = SectionProps;

export const ColorpickerSection = ({ ...props }: Props) => {
    const { t } = useTranslation();

    return (
        <Section {...props}>
            <ProjectHeading
                id="colorpicker"
                sourceHref="https://github.com/andrec2709/colorpicker-react"
                appHref="https://andrec2709.github.io/colorpicker-react"
            >
                {t('colorpicker.heading')}
            </ProjectHeading>
            <Heading id="what-is-colorpicker" as="h3" className="text-[1.5rem]">
                {t('colorpicker.whatIs.heading')}
            </Heading>
            <Paragraph>{t('colorpicker.whatIs.p1')}</Paragraph>
            <br />
            <Paragraph>{t('colorpicker.whatIs.p2')}</Paragraph>
            <br />
            <Paragraph>
                <Trans
                    i18nKey={'colorpicker.whatIs.p3'}
                    components={{
                        1: <strong />,
                    }}
                />
            </Paragraph>
            <br />
            <Paragraph>{t('colorpicker.whatIs.p4')}</Paragraph>
            <br />
            <Heading id="technical-overview-colorpicker" as="h3" className="text-[1.5rem]">
                {t('colorpicker.techOverview.heading')}
            </Heading>
            <Paragraph>
                <Trans 
                    i18nKey={'colorpicker.techOverview.p1'}
                    components={{
                        1: <Code />
                    }}
                />
            </Paragraph>
            <br />
            <Paragraph>
                <Trans
                    i18nKey={'colorpicker.techOverview.p2'}
                    components={{
                        1: (
                            <a
                                href="https://github.com/fnando/i18n"
                                className="body-link"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                            </a>
                        ),
                    }}
                />
            </Paragraph>
            <br />
            <Paragraph>{t('colorpicker.techOverview.p3')}</Paragraph>
            <br />
            <Heading id="challenges-colorpicker" as="h3" className="text-[1.5rem]">
                {t('colorpicker.challenges.heading')}
            </Heading>
            <Paragraph>{t('colorpicker.challenges.p1')}</Paragraph>
            <br />
            <Paragraph>{t('colorpicker.challenges.p2')}</Paragraph>
            <br />
            <Paragraph>{t('colorpicker.challenges.p3')}</Paragraph>
            <br />
            <Paragraph>{t('colorpicker.challenges.p4')}</Paragraph>
            <br />
            <Paragraph>{t('colorpicker.challenges.p5')}</Paragraph>
            <br />
            <Paragraph>{t('colorpicker.challenges.p6')}</Paragraph>
            <br />
            <Heading id="conclusion-colorpicker" as="h3" className="text-[1.5rem]">
                {t('colorpicker.conclusion.heading')}
            </Heading>
            <Paragraph>{t('colorpicker.conclusion.p1')}</Paragraph>
        </Section>
    );
};

export default ColorpickerSection;