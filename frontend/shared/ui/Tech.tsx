import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface TechProps {
  icon: string;
  tech: string;
}

export default function Tech({ icon, tech }: TechProps) {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`w-full max-w-25 h-fit flex flex-col gap-2 relative items-center ${isHover ? "scale-110" : "scale-100"} transition-all duration-300 ease-in-out`}
    >
      <span
        className={`w-2.5 ${isHover ? "bg-primary" : "bg-foreground"} aspect-square rounded-[50px] transition-all duration-300 ease-in-out`}
      ></span>
      <div
        className={`w-full p-2 aspect-square border border-foreground ${isHover ? "bg-background" : "bg-foreground"} rounded-xl transition-all duration-300 ease-in-out`}
      >
        <img
          className="w-full h-full object-contain object-center"
          src={icon}
          alt={tech}
        />
      </div>
      <AnimatePresence>
        {isHover && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute top-full left-[50%] translate-x-[-50%] translate-y-1 py-1 px-3 text-[15px] rounded-md font-[Blinker] capitalize tracking-wider bg-foreground"
          >
            {tech}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
