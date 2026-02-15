import type { Route } from "@rr/about/+types/index";
import Header from "~/components/layout/Header";
import Section from "~/components/layout/Section";
import AboutMeSection from "~/components/sections/AboutMeSection";
import { SkillAssessmentSection } from "~/components/sections/SkillAssessmentSection";
import Main from "~/components/ui/Main";
import LogoIcon from "../../assets/logo.svg";
import TechStackSection from "~/components/sections/TechStackSection";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "About me - André Carvalho" },
        { name: "description", content: "Here you can find more descriptive information about me and my skills." },
        { name: "keywords", content: "andre carvalho, andre, carvalho, portfolio, developer, dev, hire, offers, curriculum, solo developer, html, css, javascript, php, c++, github, technology, freelancer, freelance, freelancing" },

        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: "About me - André Carvalho" },
        { name: "twitter:description", content: "Hello, I am André, a 24-year-old developer living in Curitiba, south of Brazil." },
        { name: "twitter:image", content: LogoIcon },

        { property: "og:url", content: "https://andrecarvalho.io/" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "About me - André Carvalho" },
        { property: "og:description", content: "Hello, I am André, a 24-year-old developer living in Curitiba, south of Brazil." },
        { property: "og:image", content: LogoIcon },
    ];
}

export function links() {
    return [
        {
            rel: "canonical",
            href: "https://andrecarvalho.io/about"
        }
    ];
}

export const About = () => {
    return (
        <>
            <Main>
                <AboutMeSection classNameContainer="bg-background-2 text-on-background-2 pt-25" />
                <TechStackSection variant="wide" />
                <SkillAssessmentSection classNameContainer="bg-background-2 text-on-background-2" />
            </Main>
        </>

    );
};


export default About;