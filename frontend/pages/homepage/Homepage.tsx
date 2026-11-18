import Animate from "../../features/animate/Animate";
import About from "./About";
import Background from "./Background";
import FAQ from "./FAQ";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Tools from "./Tools";

const homepageSegments: React.ReactElement[] = [
  <Hero />,
  <About />,
  <Portfolio />,
  <Tools />,
  <Background />,
  <FAQ />,
];

export default function Homepage() {
  return (
    <div className="flex-1 flex flex-col gap-10 p-2">
      {homepageSegments.map((segment, idx) => {
        return <Animate key={idx}>{segment}</Animate>;
      })}
    </div>
  );
}
