import type { SectionProps } from "~/domain/section/types";
import Section from "../layout/Section";
import Heading from "../ui/Heading";
import ProjectCard from "../ui/ProjectCard";
import EmblaCarousel from "../ui/EmblaCarousel";

// images
import ColorpickerImg from '../../assets/images/colorpicker-screenshot.png';
import NotedImg from '../../assets/images/noted-shots.jpg';
import WebsiteImg from '../../assets/images/website-shot.png';

export default function ProjectsCarouselSection({ ...props }: SectionProps) {
    return (
        <Section {...props} variant="wide">
            <Heading id="projects-section">Projects</Heading>
            <EmblaCarousel
                options={{ loop: true, align: 'start' }}
                slideClassName={`min-[1000px]:flex-[0_0_calc(100%/3)] min-[700px]:flex-[0_0_calc(100%/2)] min-[1000px]:pl-10`}
            >
                <ProjectCard
                    backgroundImgSrc={ColorpickerImg}
                    title="colorpicker-react"
                    body="A colorpicker web application built using react."
                    readMoreHref=""
                    tryHref="https://andrec2709.github.io/colorpicker-react"
                />
                <ProjectCard
                    backgroundImgSrc={NotedImg}
                    title="noted-rn"
                    body="Note taking android application built with React Native."
                    readMoreHref=""
                    tryHref=""
                />
                <ProjectCard
                    backgroundImgSrc={WebsiteImg}
                    title="andrecarvalho.io"
                    body="A portfolio website showcasing my projects."
                    readMoreHref=""
                    tryHref="https://andrecarvalho.io"
                />
            </EmblaCarousel>
        </Section>

    );
}