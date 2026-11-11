import { lazy } from "react";

const Homepage = lazy(() => import("../pages/Homepage"));
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
  { path: "*", component: NotFound },
];
