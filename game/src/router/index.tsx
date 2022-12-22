import { lazy, LazyExoticComponent } from "react";

const Home = lazy(() => import("../pages/home"));
const Roadmap = lazy(() => import("../pages/roadmap"));

interface IRoutes {
  name: string;
  path: string;
  component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
  protected: boolean;
}
export const routes: IRoutes[] = [
  { name: "home", path: "/", component: Home, protected: false },
  { name: "roadmap", path: "/roadmap", component: Roadmap, protected: false },
];
