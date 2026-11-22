import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Homepage from "../pages/homepage/Homepage";
import Projects from "../pages/projects/Projects";
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
    path: "/projects",
    component: Projects,
  },
  {
    path: "/contact",
    component: Contact,
  },
  { path: "*", component: NotFound },
];
