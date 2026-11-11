import { Link } from "react-router-dom";

interface ButtonProps {
  to?: string;
  text?: string;
  isLink?: boolean;
}

export default function Button({
  text = "missingButtonKey",
  to = "/",
  isLink = false,
}: ButtonProps) {
  return isLink ? (
    <Link
      className="w-fit font-[Blinker] lowercase bg-foreground border-t-2 border-divider opacity-60 text-[15px] px-4.25 py-0.75 rounded-[50px] hover:scale-101 transition-all duration-300 ease-in-out"
      to={to}
    >
      {text}
      <strong>.</strong>
    </Link>
  ) : (
    <button className="w-fit font-[Blinker] lowercase bg-foreground border-t-2 border-divider opacity-50 text-[15px] px-4.25 py-0.75 rounded-[50px] hover:scale-101 transition-all duration-300 ease-in-out">
      {text}
      <strong>.</strong>
    </button>
  );
}
