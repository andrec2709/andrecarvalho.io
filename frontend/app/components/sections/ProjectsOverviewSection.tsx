import Section from "../layout/Section";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import type { SectionProps } from "~/domain/section/types";
import type React from "react";
import { useTranslation } from "react-i18next";

export default function ProjectsOverviewSection({ ...props }: SectionProps) {
    const { t } = useTranslation();

    return (
        <Section {...props}>
            {/* <Heading as="h1" id="overview">{i18n.t('portfolio.projectsOverview.heading')}</Heading> */}
            <Heading as="h1" id="overview">{t('portfolio.projectsOverview.heading')}</Heading>
            <Paragraph>{t('portfolio.projectsOverview.p1')}</Paragraph>
            <br />
        </Section>
    );
}