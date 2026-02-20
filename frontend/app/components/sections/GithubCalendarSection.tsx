import type { SectionProps } from "~/domain/section/types";
import Section from "../layout/Section";
import GithubCalendar from "../ui/GithubCalendar";
import Heading from "../ui/Heading";
import { useTranslation } from "react-i18next";

export default function GithubCalendarSection({ ...props }: SectionProps) {
    const { t } = useTranslation();
    return (
        <Section {...props}>
            <Heading id="gh-calendar">
                {t('githubCalendar.heading')}
            </Heading>
            <GithubCalendar />
        </Section>
    );
}