import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface ButtonProps {
  to?: string;
  ns?: string;
  path?: string;
}

export default function Button({
  ns = "common",
  path = "missingButtonKey",
  to = "/",
}: ButtonProps) {
  const { t } = useTranslation(ns);
  const label = t(path);
  return (
    <Link
      className="w-fit font-[Blinker] lowercase bg-foreground border border-divider text-[15px] px-4.25 py-0.75 rounded-[50px] hover:scale-101 transition-all duration-300 ease-in-out"
      to={to}
    >
      {label}
      <strong>.</strong>
    </Link>
  );
}
