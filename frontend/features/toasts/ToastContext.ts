import { createContext, useContext } from "react";
import type { Toast } from "./useToast";

interface ToastContextProps {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, "id">) => void;
}

export const ToastContext = createContext<ToastContextProps>({
  toasts: [],
  addToast: () => {},
});

export const useGetToasts = () => {
  const { toasts } = useContext(ToastContext);
  return toasts;
};

export const useGetAddToast = () => {
  const { addToast } = useContext(ToastContext);
  return addToast;
};
