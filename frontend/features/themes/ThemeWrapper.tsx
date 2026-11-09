import { ThemeContext } from "./ThemeContext";
import useTheme from "./useTheme";

interface ThemeWrapperProps {
  children: React.ReactNode | React.ReactNode[];
}

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  const { currentTheme, toggleTheme } = useTheme({
    THEME_KEY: "theme",
    cooldown: 1000,
  });

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
