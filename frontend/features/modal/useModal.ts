import { useEffect, useRef, useState, type RefObject } from "react";

interface UseModalReturns {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  triggerRef: RefObject<HTMLDivElement | null>;
  modalRef: RefObject<HTMLDivElement | null>;
}

export default function useModal(): UseModalReturns {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const lastActiveElement = useRef<HTMLElement | null>(null);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (!triggerRef.current) return;
    triggerRef.current.addEventListener("click", openModal);
    const onClickOutsideModal = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        modalRef.current?.contains(target) ||
        triggerRef.current?.contains(target)
      )
        return;
      closeModal();
    };
    const onEscapeKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      closeModal();
    };
    document.addEventListener("click", onClickOutsideModal);
    document.addEventListener("keydown", onEscapeKey);
    window.addEventListener("resize", closeModal);
    return () => {
      document.removeEventListener("click", onClickOutsideModal);
      document.removeEventListener("keydown", onEscapeKey);
      window.removeEventListener("resize", closeModal);
    };
  }, []);

  useEffect(() => {
    if (!isOpen || !triggerRef.current || !modalRef.current) return;
    document.body.style.overflow = "hidden";
    const FOCUSABLE_ELEMENTS = [
      ...modalRef.current.querySelectorAll(
        'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]',
      ),
    ].filter(
      (el) =>
        !el.hasAttribute("disabled") &&
        el.getAttribute("aria-hidden") !== "true" &&
        el.getClientRects().length > 0,
    );
    if (!FOCUSABLE_ELEMENTS.length)
      return () => {
        document.body.style.overflow = "auto";
      };
    lastActiveElement.current = document.activeElement as HTMLElement;
    const first = FOCUSABLE_ELEMENTS[0] as HTMLElement;
    const last = FOCUSABLE_ELEMENTS[
      FOCUSABLE_ELEMENTS.length - 1
    ] as HTMLElement;
    first.focus();
    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (document.activeElement === first && e.shiftKey) {
        e.preventDefault();
        last.focus();
        return;
      }
      if (document.activeElement === last && !e.shiftKey) {
        e.preventDefault();
        first.focus();
        return;
      }
    };
    document.addEventListener("keydown", trapFocus);
    return () => {
      document.removeEventListener("keydown", trapFocus);
      lastActiveElement.current?.focus();
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return { isOpen, openModal, closeModal, triggerRef, modalRef };
}
