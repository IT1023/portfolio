import { lazy } from "react";

const Homepage = lazy(() => import("../pages/homepage/Homepage"));
const About = lazy(() => import("../pages/about/About"));
const NotFound = lazy(() => import("../pages/NotFound"));

interface IRoute {
  path: string;
  component: React.FC;
}

export const routes: IRoute[] = [
  {
    path: "/",
    component: Homepage,
  },
  {
    path: "/about",
    component: About,
  },
  { path: "*", component: NotFound },
];
