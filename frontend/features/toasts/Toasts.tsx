import { createPortal } from "react-dom";
import { useGetToasts } from "./ToastContext";
import { AnimatePresence, motion } from "motion/react";
import type { SvgIconComponent } from "@mui/icons-material";
import ReportOutlinedIcon from "@mui/icons-material/ReportOutlined";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import type { SvgIconOwnProps } from "@mui/material/SvgIcon";

type Custom = SvgIconOwnProps["color"];

const icons: Record<string, SvgIconComponent> = {
  default: InfoOutlinedIcon,
  error: ReportOutlinedIcon,
  warning: WarningAmberIcon,
  info: InfoOutlinedIcon,
  success: DoneAllOutlinedIcon,
};

export default function Toasts() {
  const toasts = useGetToasts();

  return createPortal(
    <AnimatePresence>
      <div
        data-testid="toasts"
        className="fixed z-99999 top-13 right-13 flex flex-col gap-2"
      >
        {toasts.map((t) => {
          const Icon = t.type in icons ? icons[t.type] : icons["default"];
          return (
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "0px", opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden w-screen max-w-100 min-h-20 flex gap-1 rounded-md bg-foreground border-2 border-divider"
              key={t.id}
              {...(t.type === "error" ? { role: "alert" } : { role: "status" })}
            >
              <span
                className={`h-full min-h-20 text-4xl flex justify-center items-center aspect-square border-r-2 border-${t.type} text-${t.type}`}
                aria-hidden
              >
                <Icon fontSize="inherit" color={t.type as Custom} />
              </span>
              <p className="flex-1 px-2 text-ellipsis line-clamp-2 flex items-center text-sm font-[Blinker]">
                {t.message}
              </p>
            </motion.div>
          );
        })}
      </div>
    </AnimatePresence>,
    document.body,
  );
}
