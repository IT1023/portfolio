import type { SvgIconComponent } from "@mui/icons-material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

interface MiniProps {
  icon: string;
  link: string;
}

const defaultIcons: Record<string, SvgIconComponent> = {
  default: StarBorderOutlinedIcon,
};

export default function Mini({ icon, link }: MiniProps) {
  const Icon = defaultIcons[icon ?? "default"];
  return (
    <a
      target="_blank"
      href={link ?? "https://github.com/it1023"}
      className="w-25 cursor-pointer text-4xl aspect-3/2 text-current/50 rounded-3xl flex justify-center items-center bg-foreground hover:bg-background hover:border transition-all duration-300 ease-in-out border-t-2 border-divider"
    >
      <Icon fontSize="inherit" color="inherit" />
    </a>
  );
}
