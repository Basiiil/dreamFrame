import { lazy, LazyExoticComponent } from "react";

const Home = lazy(() => import("../pages/home"));
const Roadmap = lazy(() => import("../pages/roadmap"));
const NotFound = lazy(() => import("../pages/notFound"));
const ContactUs = lazy(() => import("../pages/contact-us"));
const Card = lazy(() => import("../pages/card"));

interface IRoutes {
  name: string;
  path: string;
  component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
  protected: boolean;
}
export const routes: IRoutes[] = [
  { name: "home", path: "/", component: Home, protected: false },
  { name: "roadmap", path: "/roadmap", component: Roadmap, protected: false },
  { name: "notFound", path: "/404", component: NotFound, protected: false },
  {
    name: "contact-us",
    path: "/contact-us",
    component: ContactUs,
    protected: false,
  },
  { name: "card", path: "/card", component: Card, protected: false },
];
