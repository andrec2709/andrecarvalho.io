import Header from "~/components/layout/Header";
import ContactFormSection from "~/components/sections/ContactFormSection";
import Main from "~/components/ui/Main";
import type { Route } from "@rr/contact/+types/index"
import LogoIcon from "../../assets/logo.svg";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Contact me - André Carvalho" },
    { name: "description", content: "If you wish to contact me, to make a job offer or any other inquiries, you can find out how on this section." },
    { name: "keywords", content: "andre carvalho, andre, carvalho, portfolio, developer, dev, hire, offers, curriculum, solo developer, html, css, javascript, php, c++, github, technology, freelancer, freelance, freelancing" },

    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: "Contact me - André Carvalho" },
    { name: "twitter:description", content: "Hello, I am André, a 24-year-old developer living in Curitiba, south of Brazil." },
    { name: "twitter:image", content: 'https://andrecarvalho.io/assets/logo.svg' },

    { property: "og:url", content: "https://andrecarvalho.io/" },
    { property: "og:type", content: "website" },
    { property: "og:title", content: "Contact me - André Carvalho" },
    { property: "og:description", content: "Hello, I am André, a 24-year-old developer living in Curitiba, south of Brazil." },
    { property: "og:image", content: 'https://andrecarvalho.io/assets/logo.svg' },
  ];
}

export function links() {
  return [
    {
      rel: "canonical",
      href: "https://andrecarvalho.io/contact"
    }
  ];
}

export const Contact = () => {
  return (
    <>
      <Main>
        <ContactFormSection />
      </Main>
    </>
  );
};

export default Contact;