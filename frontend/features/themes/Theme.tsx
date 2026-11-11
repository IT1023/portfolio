import { useGetTheme } from "./ThemeContext";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

export default function Theme() {
  const { currentTheme, toggleTheme } = useGetTheme();

  return (
    <button
      className="w-fit text-md cursor-pointer bg-foreground px-1.5 py-1 rounded-sm opacity-70 border-t-2 border-divider aspect-square flex justify-center items-center"
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
