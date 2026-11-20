import { ToastContext } from "./ToastContext";
import useToast from "./useToast";

interface ToastWrapperProps {
  children: React.ReactNode | React.ReactNode[];
}

export default function ToastWrapper({ children }: ToastWrapperProps) {
  const { toasts, addToast } = useToast();
  return (
    <ToastContext.Provider value={{ toasts, addToast }}>
      {children}
    </ToastContext.Provider>
  );
}
