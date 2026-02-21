import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SidebarProvider } from "./contexts/SidebarContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { ToolTipProvider } from "./contexts/ToolTipContext";
import ToolTip from "./components/ui/ToolTip";
import { useEffect, useState } from "react";
import './domain/language/i18n';
import { useTranslation } from "react-i18next";
import LogoIcon from './assets/logo.svg';

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "icon",
    href: "/favicon.svg"
  }
];

export const meta: Route.MetaFunction = () => [
  { title: 'Andre Carvalho – Developer & Designer' },
  { name: 'description', content: 'Portfolio, projects and contact information for Andre Carvalho. Web development, frontend, design and more.' },
  { property: 'og:type', content: 'website' },
  { property: 'og:title', content: 'Andre Carvalho – Portfolio' },
  { property: 'og:description', content: 'Developer & designer portfolio showing my projects and work.' },
  { property: 'og:image', content: LogoIcon },
  { property: 'og:image:alt', content: 'Andre Carvalho logo' },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: 'Andre Carvalho – Portfolio' },
  { name: 'twitter:description', content: 'Developer & designer portfolio showing my projects and work.' },
  { name: 'twitter:image', content: LogoIcon },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const { hash } = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    /* 
    This effect helps scrolling sections into view
    when the page loads.
    */
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setTimeout(() => {
              el.scrollIntoView({ behavior: 'smooth' });
            }, 0);
          });
        });
      }
    }
  }, [hash]);

  useEffect(() => {
    /* 
    Updates the <html> tag's lang attribute, whenever resolvedLanguage changes.
    */
    if (i18n.resolvedLanguage) document.documentElement.setAttribute('lang', i18n.resolvedLanguage);
  }, [i18n.resolvedLanguage]);

  return (
    <>
      <ToolTipProvider>
        <SidebarProvider>
          <ThemeProvider>
            <Header />
            <Outlet />
            <Footer />
            <ToolTip id="tooltip" />
          </ThemeProvider>
        </SidebarProvider>
      </ToolTipProvider>
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
