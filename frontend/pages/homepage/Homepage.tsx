import Animate from "../../features/animate/Animate";
import { randomAnimation } from "../../shared/lib/helpers";
import About from "./About";
import FAQ from "./FAQ";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Tools from "./Tools";

const homepageSegments: React.ReactElement[] = [
  <Hero />,
  <About />,
  <Portfolio />,
  <Tools />,
  <FAQ />,
];

export default function Homepage() {
  return (
    <div className="flex-1 flex flex-col gap-10 p-2">
      {homepageSegments.map((segment, idx) => {
        const { animate, exit, initial, transition } = randomAnimation();
        return (
          <Animate
            key={idx}
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
          >
            {segment}
          </Animate>
        );
      })}
    </div>
  );
}
