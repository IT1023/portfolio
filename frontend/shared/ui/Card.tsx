interface CardProps {
  pic: string;
  text: string;
}

export default function Card({ pic, text }: CardProps) {
  return (
    <div className="max-w-80 w-full h-full max-h-90 border-t-2 border-divider bg-foreground rounded-3xl p-3 flex flex-col gap-1 hover:-translate-y-px transition-all duration-200 ease-in-out">
      <div className="w-full aspect-square rounded-xl overflow-hidden">
        <img className="w-full h-full object-cover" src={pic} alt={text} />
      </div>
      <span className="flex-1 line-clamp-1 overflow-hidden font-[Blinker] text-current/50 flex items-end justify-center">
        <h3>{text}</h3>
      </span>
    </div>
  );
}
