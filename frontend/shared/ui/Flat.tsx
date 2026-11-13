import { useState } from "react";

interface FlatProps {
  flatKey: string;
  flatValue: string;
  icon: string;
}

export default function Flat({ flatKey, flatValue, icon }: FlatProps) {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      className="w-85 h-28 bg-foreground border-t-2 border-divider rounded-3xl overflow-hidden flex justify-between gap-1"
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="flex-1 overflow-hidden h-full flex flex-col justify-center gap-1 px-4">
        <h1 className="text-current/50 text-xl font-semibold tracking-wide truncate">
          {flatKey}
        </h1>
        <h3 className="capitalize text-current/70 font-[Blinker] font-semibold text-[28px] truncate">
          {flatValue}
        </h3>
      </div>
      <div className="h-full shrink-0 w-18 p-3 flex justify-end" aria-hidden>
        <img
          className={`h-full w-fit object-contain ${isHover ? "-translate-x-2" : "translate-x-0"} transition-all duration-400 ease-in-out`}
          src={icon}
          alt=""
        />
      </div>
    </div>
  );
}
