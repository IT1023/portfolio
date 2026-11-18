import type { SvgIconComponent } from "@mui/icons-material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { useTranslation } from "react-i18next";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";

interface MiniProps {
  ns: string;
  path: string;
}

interface MiniContent {
  icon: string;
  link: string;
}

const defaultIcons: Record<string, SvgIconComponent> = {
  default: StarBorderOutlinedIcon,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  cv: DescriptionIcon,
};

export default function Mini({ ns, path }: MiniProps) {
  const { t } = useTranslation(ns);
  const content = t(path, {
    returnObjects: true,
  }) as MiniContent[];

  return (
    <div className="w-full flex gap-2 justify-center flex-wrap">
      {Array.isArray(content) &&
        content.map((c) => {
          const { icon, link } = c;
          const reel = icon in defaultIcons ? icon : "default";
          const Icon = defaultIcons[reel];
          return (
            <a
              key={c.link}
              target="_blank"
              href={link ?? "https://github.com/it1023"}
              className="flex-1 min-w-25 cursor-pointer text-4xl min-h-25 text-current/50 rounded-2xl flex justify-center items-center bg-foreground hover:bg-background transition-all duration-300 ease-in-out border-t-2 border-divider"
            >
              <Icon fontSize="inherit" color="inherit" />
            </a>
          );
        })}
    </div>
  );
}
