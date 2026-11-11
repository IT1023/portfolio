import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { SvgIconComponent } from "@mui/icons-material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";

const allowedIcons: Record<string, SvgIconComponent> = {
  default: TrackChangesOutlinedIcon,
};

interface AccordionProps {
  icon: string;
  text: string;
  content: string;
}

export default function Accordion({ icon, text, content }: AccordionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleAccordion = () => setIsOpen((isOpen) => !isOpen);
  const IconComponent =
    icon in allowedIcons ? allowedIcons[icon] : allowedIcons["default"];
  return (
    <div className="w-full h-fit max-w-55 border-t-2 border-divider rounded-2xl min-h-14 bg-foreground flex flex-col">
      <div
        className="w-full py-1 px-2 cursor-pointer border-white h-14 line-clamp-2 flex gap-2 justify-between items-center"
        onClick={toggleAccordion}
      >
        <div className="flex-1 h-14 opacity-50 flex gap-1.5 items-center">
          <span className="flex items-center" aria-hidden>
            {<IconComponent fontSize="small" />}
          </span>
          <h1 className="flex-1 line-clamp-1">{text}</h1>
        </div>
        <span
          className={`h-14 w-fit flex items-center opacity-50 ${isOpen ? "-rotate-180" : "rotate-0"} transition-all duration-300 ease-in-out`}
          aria-hidden
        >
          <ArrowDownwardIcon fontSize="small" />
        </span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.section
            className="w-full p-2 border-t border-divider overflow-hidden"
            initial={{ height: "0", opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: "0", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h3 className="text-sm opacity-50 line-clamp-4">{content}</h3>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
