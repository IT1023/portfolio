import { cloneElement } from "react";
import useModal from "./useModal";
import { AnimatePresence, motion, type MotionProps } from "motion/react";
import { createPortal } from "react-dom";

interface ModalProps {
  trigger: React.ReactElement;
  children: React.ReactElement;
  blurBackground?: boolean;
  initial?: MotionProps["initial"];
  animate?: MotionProps["animate"];
  exit?: MotionProps["exit"];
  transition?: MotionProps["transition"];
}

export default function Modal({
  trigger,
  children,
  blurBackground = false,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  exit = { opacity: 0 },
  transition = { duration: 0.3, ease: "easeInOut" },
}: ModalProps) {
  const { isOpen, triggerRef, modalRef } = useModal();

  const clonedTrigger = cloneElement(trigger, {
    ref: triggerRef,
  } as React.RefAttributes<HTMLElement>);

  const clonedChildren = cloneElement(children, {
    ref: modalRef,
  } as React.RefAttributes<HTMLElement>);

  return (
    <>
      {clonedTrigger}
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="modal-backdrop"
              className={`${blurBackground ? "fixed z-9999 top-0 right-0 w-screen h-screen bg-transparent backdrop-blur-[2px]" : "w-fit h-fit"}`}
              initial={initial}
              animate={animate}
              exit={exit}
              transition={transition}
              role="dialog"
              aria-modal
            >
              {clonedChildren}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
}
