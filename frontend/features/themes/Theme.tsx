import { useGetTheme } from "./ThemeContext";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

export default function Theme() {
  const { currentTheme, toggleTheme } = useGetTheme();

  return (
    <button
      className="w-fit text-md cursor-pointer p-1.5 rounded-sm bg-foreground aspect-square flex justify-center items-center"
      onClick={toggleTheme}
    >
      {currentTheme === "dark" ? (
        <LightModeOutlinedIcon fontSize="inherit" />
      ) : (
        <DarkModeOutlinedIcon fontSize="inherit" />
      )}
    </button>
  );
}
