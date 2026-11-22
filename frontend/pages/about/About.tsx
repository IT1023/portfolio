import Animate from "../../features/animate/Animate";
import { randomAnimation } from "../../shared/lib/helpers";
import Background from "../about/Background";
import Hero from "./Hero";
import Journal from "./Journal";

const aboutSegemnts: React.ReactElement[] = [
  <Hero />,
  <Background />,
  <Journal />,
];

export default function About() {
  return (
    <div className="flex-1 flex flex-col gap-10 p-2 pt-24">
      {aboutSegemnts.map((segment, idx) => {
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
