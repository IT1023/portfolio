import { useCallback, useState } from "react";
import { generateUniqueString } from "../../shared/lib/helpers";

export interface Toast {
  id: string;
  type: string;
  message: string;
}

export default function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((toast: Omit<Toast, "id">) => {
    const id = generateUniqueString();
    const newToast = { id, ...toast };
    setToasts((toasts) => [...toasts, newToast]);
    setTimeout(() => {
      setToasts((toasts) => toasts.filter((t) => t.id !== id));
    }, 5000);
  }, []);

  return { toasts, addToast };
}
