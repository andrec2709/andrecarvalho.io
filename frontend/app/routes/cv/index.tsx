import type { Route } from "@rr/cv/+types/index";
import Section from "~/components/layout/Section";
import CvSection from "~/components/ui/CvSection";
import Main from "~/components/ui/Main";

export function meta({ }: Route.MetaArgs) {
    return [

    ];
}

export function links() {
    return [

    ];
};

export default function Cv() {
    return (
        <Main>
            <Section classNameContainer="pt-25 print:pt-0 border-0" classNameContent="max-w-300">
                <CvSection />
            </Section>
        </Main>
    );
};