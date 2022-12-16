import { lazy, LazyExoticComponent } from "react";

const Home = lazy(() => import("../pages/home"));

interface IRoutes {
  name: string;
  path: string;
  component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
  protected: boolean;
}
export const routes: IRoutes[] = [
  { name: "home", path: "/", component: Home, protected: false },
];
