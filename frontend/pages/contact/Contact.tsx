import Animate from "../../features/animate/Animate";
import { randomAnimation } from "../../shared/lib/helpers";
import Form from "./Form";
import Intro from "./Intro";

const contactSegments: React.ReactElement[] = [<Intro />, <Form />];

export default function Contact() {
  return (
    <div className="flex-1 flex flex-col gap-10 p-2 pt-24">
      {contactSegments.map((segment, idx) => {
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
