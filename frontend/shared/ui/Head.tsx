interface HeadProps {
  img: string;
  subtitle: string;
  title: string;
}

export default function Head({ img, subtitle, title }: HeadProps) {
  return (
    <div className="mx-auto flex flex-col gap-2 items-center">
      <div className="flex flex-col gap-1 text-6xl items-center text-current/50">
        <div aria-hidden className="min-w-14">
          <img src={img} alt={title} />
        </div>
        <h3 className="text-sm uppercase font-[Blinker] font-semibold">
          {subtitle}
        </h3>
      </div>
      <h1 className="text-5xl capitalize font-[Blinker]">{title}</h1>
    </div>
  );
}
