import { useGetTheme } from "./ThemeContext";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

export default function Theme() {
  const { currentTheme, toggleTheme } = useGetTheme();

  return (
    <button
      className="w-fit text-md cursor-pointer bg-foreground px-1.25 py-0.75 rounded-sm text-white/70 border border-divider aspect-square flex justify-center items-center"
      onClick={toggleTheme}
    >
      {currentTheme === "dark" ? (
        <LightModeOutlinedIcon fontSize="inherit" color="inherit" />
      ) : (
        <DarkModeOutlinedIcon fontSize="inherit" color="inherit" />
      )}
    </button>
  );
}
