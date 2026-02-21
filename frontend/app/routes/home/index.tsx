import type { Route } from "@rr/home/+types/index";
import Main from "~/components/ui/Main";
import AboutMeSection from "~/components/sections/AboutMeSection";
import ContactFormSection from "~/components/sections/ContactFormSection";
import LogoIcon from "../../assets/logo.svg";
import useReposRepository from "~/application/github/repos/useReposRepository";
import { useEffect, useState, type JSX } from "react";
import Card from "~/components/ui/Card";

import ProjectsCarouselSection from "~/components/sections/ProjectsCarouselSection";
import GithubCalendar from "~/components/ui/GithubCalendar";
import GithubCalendarSection from "~/components/sections/GithubCalendarSection";

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

  return (
    <>
      <Main>
        <ProjectsCarouselSection />
        <AboutMeSection classNameContainer="bg-background-2 text-on-background-2"/>
        <ContactFormSection />
        <GithubCalendarSection />
      </Main>
    </>
  );
}
