import { lazy } from "react";

const Homepage = lazy(() => import("../pages/Homepage"));

interface IRoute {
  path: string;
  component: React.FC;
}

export const routes: IRoute[] = [
  {
    path: "/",
    component: Homepage,
  },
];
