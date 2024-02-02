import {
  AboutPage,
  HeroPage,
  SolutionsPage,
  ContactPage,
} from "@/components/section-pages";

type PageNavigationConfig = {
  component: JSX.Element;
  route: string;
  navLink: boolean | "button";

  /* SEO */
  metadata?: { title?: string; description?: string };
}[];

export const pageNavigationConfig: PageNavigationConfig = [
  {
    component: <HeroPage />,
    route: "/",
    metadata: { title: "Start", description: "Descripe this site blyat" },
    navLink: true,
  },
  {
    component: <SolutionsPage />,
    route: "/solutions",
    metadata: { title: "Solutions" },
    navLink: true,
  },
  {
    component: <AboutPage />,
    route: "/about",
    metadata: { title: "About" },
    navLink: true,
  },
  {
    component: <ContactPage />,
    route: "/contact",
    metadata: { title: "Contact" },
    navLink: "button",
  },
];
