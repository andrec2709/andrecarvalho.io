import type { SectionProps } from "~/domain/section/types";
import Section from "../layout/Section";
import { Trans, useTranslation } from "react-i18next";
import ProjectHeading from "../ui/ProjectHeading";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Code from "../ui/Code";

export default function NotedRnSection({ ...props }: SectionProps) {
    const { t } = useTranslation();

    return (
        <Section {...props}>
            <ProjectHeading
                id="notedRn"
                sourceHref="https://github.com/andrec2709/noted-rn"
                appHref="https://github.com/andrec2709/noted-rn"
            >
                {t('notedRn.heading')}
            </ProjectHeading>
            <Heading id="what-is-notedRn" as="h3" className="text-[1.5rem]">
                {t('notedRn.whatIs.heading')}
            </Heading>
            <Paragraph>{t('notedRn.whatIs.p1')}</Paragraph>
            <br />
            <Paragraph>{t('notedRn.whatIs.p2')}</Paragraph>
            <br />
            <Paragraph>
                <Trans 
                    i18nKey={'notedRn.whatIs.p3'}
                    components={{
                        1: <i></i>
                    }}
                />
            </Paragraph>
            <br />
            <ul className="unordered">
                {
                    t('notedRn.whatIs.p3List', { returnObjects: true }).map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
            <br />
            <Heading id="tech-overview-notedRn" as="h3" className="text-[1.5rem]">
                {t('notedRn.techOverview.heading')}
            </Heading>
            <Paragraph>
                <Trans 
                    i18nKey={'notedRn.techOverview.p1'}
                    components={{
                        1: <Code />
                    }}
                />
            </Paragraph>
            <br />
            <Paragraph>
                <Trans
                    i18nKey={'notedRn.techOverview.p2'}
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
            <Paragraph>
                <Trans 
                    i18nKey={'notedRn.techOverview.p3'}
                    components={{
                        1: (
                            <a
                                href="https://github.com/MatiPl01/react-native-sortables"
                                className="body-link"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                            </a>
                        )
                    }}
                />
            </Paragraph>
            <br />
            <Paragraph>
                <Trans 
                    i18nKey={'notedRn.techOverview.p4'}
                    components={{
                        1: (
                            <a
                                href="https://github.com/software-mansion/react-native-enriched"
                                className="body-link"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                            </a>
                        ),
                        2: (
                            <a
                                href="https://github.com/facebook/lexical"
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
            <Heading id="conclusion-notedRn" as="h3" className="text-[1.5rem]">
                {t('notedRn.conclusion.heading')}
            </Heading>
            <Paragraph>{t('notedRn.conclusion.p1')}</Paragraph>
            <br />
        </Section>
    );
}