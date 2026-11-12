import useAnimate from "./useAnimate";
import { AnimatePresence, motion, type MotionProps } from "motion/react";

interface AnimateProps {
  children: React.ReactNode;
  initial?: MotionProps["initial"];
  animate?: MotionProps["animate"];
  exit?: MotionProps["exit"];
  transition?: MotionProps["transition"];
}

export default function Animate({
  children,
  initial = { y: "50px" },
  animate = { y: "0" },
  exit = { y: "50px" },
  transition = { duration: 0.6, ease: "easeInOut" },
}: AnimateProps) {
  const { isCrossed, sentinelRef } = useAnimate();

  return (
    <>
      {!isCrossed && (
        <div aria-hidden ref={sentinelRef} className="w-0 h-0"></div>
      )}
      <AnimatePresence>
        {isCrossed && (
          <motion.div
            className="flex-1"
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
