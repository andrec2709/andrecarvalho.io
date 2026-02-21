import Header from "~/components/layout/Header";
import Section from "~/components/layout/Section";
import ColorpickerSection from "~/components/sections/ColorpickerSection";
import Carousel from "~/components/ui/Carousel";
import Heading from "~/components/ui/Heading";
import Main from "~/components/ui/Main";
import type { Route } from "@rr/portfolio/+types/index";
import LogoIcon from "../../assets/logo.svg";
import RepositoriesCarouselSection from "~/components/sections/RepositoriesCarouselSection";
import ProjectsOverviewSection from "~/components/sections/ProjectsOverviewSection";
import NotedRnSection from "~/components/sections/NotedRnSection";
import AndreCarvalhoIoSection from "~/components/sections/AndreCarvalhoIoSection";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Portfolio - André Carvalho" },
        { name: "description", content: "Check out my portfolio and personal projects." },
        { name: "keywords", content: "andre carvalho, andre, carvalho, portfolio, developer, dev, hire, offers, curriculum, solo developer, html, css, javascript, php, c++, github, technology, freelancer, freelance, freelancing" },

        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: "Portfolio - André Carvalho" },
        { name: "twitter:description", content: "Hello, I am André, a 24-year-old developer living in Curitiba, south of Brazil." },
        { name: "twitter:image", content: 'https://andrecarvalho.io/assets/logo.svg' },

        { property: "og:url", content: "https://andrecarvalho.io/" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Portfolio - André Carvalho" },
        { property: "og:description", content: "Hello, I am André, a 24-year-old developer living in Curitiba, south of Brazil." },
        { property: "og:image", content: 'https://andrecarvalho.io/assets/logo.svg' },
    ];
}

export function links() {
    return [
        {
            rel: "canonical",
            href: "https://andrecarvalho.io/portfolio"
        }
    ];
}

export const Portfolio = () => {
    return (
        <>
            <Main>
                <RepositoriesCarouselSection />
                <ProjectsOverviewSection classNameContainer="bg-background-2 text-on-background-2" />
                <ColorpickerSection />
                <NotedRnSection classNameContainer="bg-background-2 text-on-background-2" />
                <AndreCarvalhoIoSection />
            </Main>
        </>
    );
};

export default Portfolio;