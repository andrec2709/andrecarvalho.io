import { useLang } from "~/contexts/LangContext";
import Section from "../layout/Section";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import type { SectionProps } from "~/domain/section/types";
import type React from "react";

type Props = SectionProps & {
    children?: React.ReactNode;
};

export default function ProjectsOverviewSection({ children, ...props }: Props) {
    const { i18n } = useLang();
    return (
        <Section {...props}>
            <Heading as="h1" id="overview">{i18n.t('portfolio.projectsOverview.heading')}</Heading>
            <Paragraph>{i18n.t('portfolio.projectsOverview.p1')}</Paragraph>
            <br />
            <br />
            {children}
        </Section>
    );
}