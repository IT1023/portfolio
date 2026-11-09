import { useEffect, useMemo, useState } from "react";
import { throttle } from "../../shared/lib/helpers";

export type TTheme = "light" | "dark";

interface UseThemeProps {
  cooldown: number;
  THEME_KEY: string;
}

export interface UseThemeReturns {
  currentTheme: TTheme;
  toggleTheme: () => void;
}

const getInitialTheme = (THEME_KEY: string): TTheme => {
  try {
    const local = localStorage.getItem(THEME_KEY) ?? "";
    if (["light", "dark"].includes(local)) return local as TTheme;
    const mediaMatchDark = window.matchMedia("(prefers-color-schemes: dark)");
    if (mediaMatchDark.matches) return "dark";
    return "light";
  } catch (err) {
    console.log(err);
    return "light";
  }
};

export default function useTheme({
  cooldown,
  THEME_KEY,
}: UseThemeProps): UseThemeReturns {
  const [currentTheme, setCurrentTheme] = useState<TTheme>(() =>
    getInitialTheme(THEME_KEY),
  );

  const toggleTheme = useMemo(
    () =>
      throttle(
        () =>
          setCurrentTheme((currentTheme) =>
            currentTheme === "dark" ? "light" : "dark",
          ),
        cooldown,
      ),
    [cooldown],
  );

  useEffect(() => {
    try {
      document.documentElement.classList.toggle(
        "dark",
        currentTheme === "dark",
      );
      localStorage.setItem(THEME_KEY, currentTheme);
    } catch (err) {
      console.log(err);
    }
  }, [currentTheme, THEME_KEY]);

  return { currentTheme, toggleTheme };
}
