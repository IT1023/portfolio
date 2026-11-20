import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Homepage from "../pages/homepage/Homepage";
import NotFound from "../pages/NotFound";

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
  {
    path: "/contact",
    component: Contact,
  },
  { path: "*", component: NotFound },
];
