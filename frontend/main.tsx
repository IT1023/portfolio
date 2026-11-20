import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ThemeWrapper from "./features/themes/ThemeWrapper.tsx";
import App from "./App.tsx";
import "./config/i18n.ts";
import "./index.css";
import ToastWrapper from "./features/toasts/ToastWrapper.tsx";
import Toasts from "./features/toasts/Toasts.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeWrapper>
      <ToastWrapper>
        <App />
        <Toasts />
        <div
          aria-hidden
          className="bg-error text-info border-warning w-0 h-0 hidden"
        ></div>
      </ToastWrapper>
    </ThemeWrapper>
  </StrictMode>,
);
