import type { SectionProps } from "~/domain/section/types";
import Section from "../layout/Section";
import Heading from "../ui/Heading";
import ProjectCard from "../ui/ProjectCard";
import EmblaCarousel from "../ui/EmblaCarousel";

// images
import ColorpickerImg from '../../assets/images/colorpicker-screenshot.png';
import NotedImg from '../../assets/images/noted-shots.jpg';
import WebsiteImg from '../../assets/images/website-shot.png';
import { useTranslation } from "react-i18next";
import Autoplay from "embla-carousel-autoplay";

export default function ProjectsCarouselSection({ ...props }: SectionProps) {
    const { t } = useTranslation();

    return (
        <Section {...props} variant="wide">
            <Heading id="projects-section">{t('words.projects')}</Heading>
            <EmblaCarousel
                options={{ loop: true, align: 'start' }}
                plugins={[Autoplay({delay: 3000})]}
                slideClassName={`min-[850px]:flex-[0_0_calc(100%/2)] min-[850px]:pl-10`}
            >
                <ProjectCard
                    backgroundImgSrc={ColorpickerImg}
                    title={t('projectCards.colorpicker.title')}
                    body={t('projectCards.colorpicker.description')}
                    readMoreHref="/portfolio#colorpicker"
                    tryHref="https://andrec2709.github.io/colorpicker-react"
                    imgProps={{
                        "aria-label": t('projectCards.colorpicker.image.label'),
                    }}
                />
                <ProjectCard
                    backgroundImgSrc={NotedImg}
                    title={t('projectCards.noted.title')}
                    body={t('projectCards.noted.description')}
                    readMoreHref="/portfolio#notedRn"
                    tryHref="https://github.com/andrec2709/noted-rn"
                    imgProps={{
                        "aria-label": t('projectCards.noted.image.label'),
                    }}
                />
                <ProjectCard
                    backgroundImgSrc={WebsiteImg}
                    title={t('projectCards.andrecarvalhoIo.title')}
                    body={t('projectCards.andrecarvalhoIo.description')}
                    readMoreHref="/portfolio#andrecarvalho-io"
                    tryHref="https://andrecarvalho.io"
                    imgProps={{
                        "aria-label": t('projectCards.andrecarvalhoIo.image.label'),
                    }}
                />
            </EmblaCarousel>
            <br />
        </Section>

    );
}