import type { Route } from "@rr/home/+types/index";
import Carousel from "~/components/ui/Carousel";
import Main from "~/components/ui/Main";
import { useLang } from "~/contexts/LangContext";
import AboutMeSection from "~/components/sections/AboutMeSection";
import Section from "~/components/layout/Section";
import ContactFormSection from "~/components/sections/ContactFormSection";
import LogoIcon from "../../assets/logo.svg";
import EmblaCarousel from "~/components/ui/EmblaCarousel";
import useReposRepository from "~/application/github/repos/useReposRepository";
import { useEffect, useState, type JSX } from "react";
import { type RepoCard } from "~/domain/github/repos/types";
import Card from "~/components/ui/Card";
import ProjectCard from "~/components/ui/ProjectCard";
import ColorpickerImg from '../../assets/images/colorpicker-screenshot.png';
import NotedImg from '../../assets/images/noted-shots.jpg';
import WebsiteImg from '../../assets/images/website-shot.png';

import Heading from "~/components/ui/Heading";
import Autoplay from "embla-carousel-autoplay";
import ProjectsCarouselSection from "~/components/sections/ProjectsCarouselSection";
import RepositoriesCarouselSection from "~/components/sections/RepositoriesCarouselSection";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Home - André Carvalho" },
    { name: "description", content: "Hello, I am André, a 24-year-old developer living in Curitiba, south of Brazil. I have been writing code since around 2018. I learned Python as my first language, and have since studied many things, ranging from web development with HTML/CSS/JS, PHP, React, to application development with Electron, Kotlin (Jetpack Compose) and even game development. Programming is something I enjoy no matter the subject, so I’m always interested in trying new things." },
    { name: "keywords", content: "andre carvalho, andre, carvalho, portfolio, developer, dev, hire, offers, curriculum, solo developer, html, css, javascript, php, c++, github, technology, freelancer, freelance, freelancing" },

    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: "Home - André Carvalho" },
    { name: "twitter:description", content: "Hello, I am André, a 24-year-old developer living in Curitiba, south of Brazil." },
    { name: "twitter:image", content: LogoIcon },

    { property: "og:url", content: "https://andrecarvalho.io/" },
    { property: "og:type", content: "website" },
    { property: "og:title", content: "Home - André Carvalho" },
    { property: "og:description", content: "Hello, I am André, a 24-year-old developer living in Curitiba, south of Brazil." },
    { property: "og:image", content: LogoIcon },
  ];
}

export function links() {
  return [
    {
      rel: "canonical",
      href: "https://andrecarvalho.io/"
    }
  ];
}

export default function Home() {
  const repo = useReposRepository();
  const [data, setData] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const items = await repo.getAll();
      const newData = items.map(item => <Card repoData={item} key={item.id} />);
      setData(newData);

    };
    fetchData();
  }, []);

  return (
    <>
      <Main>
        {/* <Section classNameContainer="pt-25" variant="wide">
          <EmblaCarousel
            options={{ loop: true, align: 'start' }}
            plugins={[Autoplay({delay: 5000})]}
            slideClassName="min-[500px]:flex-[0_0_calc(100%/2)] min-[700px]:flex-[0_0_calc(100%/3)] min-[1000px]:flex-[0_0_calc(100%/4)] min-[700px]:pl-[1.6rem] min-[1000px]:pl-8"
          >
            {data}
          </EmblaCarousel>
        </Section> */}
        <ProjectsCarouselSection classNameContainer="pt-25 bg-background-2 text-on-background-2" />
        {/* <RepositoriesCarouselSection /> */}
        <AboutMeSection />
        <ContactFormSection classNameContainer="bg-background-2 text-on-background-2" />
      </Main>
    </>
  );
}
