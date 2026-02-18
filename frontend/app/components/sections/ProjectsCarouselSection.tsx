import type { SectionProps } from "~/domain/section/types";
import Section from "../layout/Section";
import Heading from "../ui/Heading";
import ProjectCard from "../ui/ProjectCard";
import EmblaCarousel from "../ui/EmblaCarousel";

// images
import ColorpickerImg from '../../assets/images/colorpicker-screenshot.png';
import NotedImg from '../../assets/images/noted-shots.jpg';
import WebsiteImg from '../../assets/images/website-shot.png';
import { useLang } from "~/contexts/LangContext";

export default function ProjectsCarouselSection({ ...props }: SectionProps) {
    const { i18n } = useLang();

    return (
        <Section {...props} variant="wide">
            <Heading id="projects-section">Projects</Heading>
            <EmblaCarousel
                options={{ loop: true, align: 'start' }}
                slideClassName={`min-[1000px]:flex-[0_0_calc(100%/3)] min-[700px]:flex-[0_0_calc(100%/2)] min-[1000px]:pl-10`}
            >
                <ProjectCard
                    backgroundImgSrc={ColorpickerImg}
                    title={i18n.t('projectCards.colorpicker.title')}
                    body={i18n.t('projectCards.colorpicker.description')}
                    readMoreHref="https://andrecarvalho.io/portfolio#colorpicker"
                    tryHref="https://andrec2709.github.io/colorpicker-react"
                />
                <ProjectCard
                    backgroundImgSrc={NotedImg}
                    title={i18n.t('projectCards.noted.title')}
                    body={i18n.t('projectCards.noted.description')}
                    readMoreHref=""
                    tryHref="https://github.com/andrec2709/noted-rn"
                />
                <ProjectCard
                    backgroundImgSrc={WebsiteImg}
                    title={i18n.t('projectCards.andrecarvalhoIo.title')}
                    body={i18n.t('projectCards.andrecarvalhoIo.description')}
                    readMoreHref=""
                    tryHref="https://andrecarvalho.io"
                />
            </EmblaCarousel>
        </Section>

    );
}