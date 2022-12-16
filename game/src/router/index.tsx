import { lazy, LazyExoticComponent } from "react";

const Home = lazy(() => import("../pages/home"));
const Card = lazy(() => import("../pages/card"));

interface IRoutes {
  name: string;
  path: string;
  component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
  protected: boolean;
}
export const routes: IRoutes[] = [
  { name: "home", path: "/", component: Home, protected: false },
  { name: "card", path: "/card", component: Card, protected: false },
];
