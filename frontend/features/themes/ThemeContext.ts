import { createContext, useContext } from "react";
import type { UseThemeReturns } from "./useTheme";

export const ThemeContext = createContext<UseThemeReturns>({
  currentTheme: "light",
  toggleTheme: () => {},
});

export const useGetTheme = (): UseThemeReturns => {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);
  return { currentTheme, toggleTheme };
};
