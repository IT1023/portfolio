import type { SvgIconComponent } from "@mui/icons-material";

interface HeadProps {
  Icon: SvgIconComponent;
  subtitle: string;
  title: string;
}

export default function Head({ Icon, subtitle, title }: HeadProps) {
  return (
    <div className="mx-auto flex flex-col items-center">
      <div className="flex flex-col text-6xl items-center text-current/50">
        <Icon fontSize="inherit" color="inherit" />
        <h3 className="text-sm uppercase font-[Blinker] font-semibold">
          {subtitle}
        </h3>
      </div>
      <h1 className="text-4xl capitalize font-[Blinker]">{title}</h1>
    </div>
  );
}
