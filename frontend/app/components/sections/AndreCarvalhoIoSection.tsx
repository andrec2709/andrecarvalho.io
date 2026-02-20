import type { SectionProps } from "~/domain/section/types";
import Section from "../layout/Section";
import ProjectHeading from "../ui/ProjectHeading";
import { Trans, useTranslation } from "react-i18next";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Code from "../ui/Code";
import { Link } from "react-router-dom";
import Callout from "../ui/Callout";

export default function AndreCarvalhoIoSection({ ...props }: SectionProps) {
    const { t } = useTranslation();

    return (
        <Section {...props}>
            <ProjectHeading
                id="andrecarvalho-io"
                sourceHref="https://github.com/andrec2709/andrecarvalho.io"
                appHref="https://andrecarvalho.io"
            >
                {t('andreCarvalhoIo.heading')}
            </ProjectHeading>
            <Heading id="what-is-andrecarvalho-io" as="h3" className="text-[1.5rem]">
                {t('andreCarvalhoIo.whatIs.heading')}
            </Heading>
            <Paragraph>{t('andreCarvalhoIo.whatIs.p1')}</Paragraph>
            <br />
            <Paragraph>{t('andreCarvalhoIo.whatIs.p2')}</Paragraph>
            <br />
            <Heading id="technical-overview-andrecarvalho-io" as="h3" className="text-[1.5rem]">
                {t('andreCarvalhoIo.techOverview.heading')}
            </Heading>
            <Paragraph>
                <Trans
                    i18nKey={'andreCarvalhoIo.techOverview.p1'}
                    components={{
                        1: <Code />,
                    }}
                />
            </Paragraph>
            <br />
            <Paragraph>
                <Trans
                    i18nKey={'andreCarvalhoIo.techOverview.p2'}
                    components={{
                        1: <a href="https://react.i18next.com/" rel="noopener noreferrer" className="body-link" target="_blank"></a>,
                    }}
                />
            </Paragraph>
            <br />
            <Paragraph>
                <Trans
                    i18nKey={'andreCarvalhoIo.techOverview.p3'}
                    components={{
                        1: <Code />,
                        2: <a href="https://github.com/grubersjoe/react-activity-calendar" rel="noopener noreferrer" className="body-link" target="_blank"></a>,
                        3: <a href="https://github.com/davidjerleke/embla-carousel" rel="noopener noreferrer" className="body-link" target="_blank"></a>,
                        5: <strong />,
                    }}
                />
            </Paragraph>
            <Callout
                title={t('andreCarvalhoIo.techOverview.p3Note.title')}
                titleId="github-api-note"
            >
                <Trans 
                    i18nKey={'andreCarvalhoIo.techOverview.p3Note.body'}
                    components={{
                        1: <a href="https://github.com/andrec2709/andrecarvalho.io" rel="noopener noreferrer" className="body-link" target="_blank"></a>,
                    }}
                />
            </Callout>
            <br />
            <Paragraph>
                <Trans
                    i18nKey={'andreCarvalhoIo.techOverview.p4'}
                    components={{
                        1: <strong />,
                    }}
                />
            </Paragraph>
            <br />
            <Heading id="challenges-andrecarvalho-io" as="h3" className="text-[1.5rem]">
                {t('andreCarvalhoIo.challenges.heading')}
            </Heading>
            <Paragraph>
                <Trans
                    i18nKey={'andreCarvalhoIo.challenges.p1'}
                    components={{
                        1: <Link to="/portfolio#colorpicker" rel="noopener noreferrer" className="body-link" target="_blank"></Link>,
                    }}
                />
            </Paragraph>
            <br />
            <Heading id="conclusion-andrecarvalho-io" as="h3" className="text-[1.5rem]">
                {t('andreCarvalhoIo.conclusion.heading')}
            </Heading>
            <Paragraph>{t('andreCarvalhoIo.conclusion.p1')}</Paragraph>
            <br />
        </Section>
    );
}