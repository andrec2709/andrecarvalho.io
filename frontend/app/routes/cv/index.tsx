import type { Route } from "@rr/cv/+types/index";
import { Link } from "react-router";
import Section from "~/components/layout/Section";
import CvContactSection from "~/components/sections/CvContactSection";
import CvSummarySection from "~/components/sections/CvSummarySection";
import CvSidebar from "~/components/ui/CvSidebar";
import Heading from "~/components/ui/Heading";
import Main from "~/components/ui/Main";
import { useLang } from "~/contexts/LangContext";

export function meta({ }: Route.MetaArgs) {
    return [

    ];
}

export function links() {
    return [

    ];
};

export default function Cv() {
    const { translations } = useLang();
    return (
        <Main>
            <Section classNameContainer="pt-25 print:pt-0 border-0" classNameContent="max-w-300">
                <CvSidebar />
            </Section>
        </Main>
    );
};