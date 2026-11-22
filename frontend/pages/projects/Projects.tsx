import Articles from "./Articles";
import Showcase from "./Showcase";
import Animate from "../../features/animate/Animate";
import { randomAnimation } from "../../shared/lib/helpers";

const projectSegment: React.ReactElement[] = [<Showcase />, <Articles />];

export default function Projects() {
  return (
    <div className="flex-1 flex flex-col gap-10 p-2 pt-24">
      {projectSegment.map((segment, index) => {
        const { animate, exit, initial, transition } = randomAnimation();
        return (
          <Animate
            key={index}
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
