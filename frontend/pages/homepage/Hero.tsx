import Flat from "../../shared/ui/Flat";
import Mini from "../../shared/ui/Mini";
import Square from "../../shared/ui/Square";
import Title from "../../shared/ui/Title";

export default function Hero() {
  return (
    <div className="w-full min-h-75 flex justify-center">
      <div className="container flex-1 max-w-7xl p-2 flex gap-3 flex-col lg:flex-row justify-center">
        <Title ns="homepage" path="hero.titleCard" />
        <div className="w-full flex-1 flex flex-col gap-2">
          <Flat ns="homepage" path="hero.flatCard.first" />
          <Mini ns="homepage" path="hero.miniCard" />
          <Flat ns="homepage" path="hero.flatCard.second" />
        </div>
        <Square ns="homepage" path="hero.contact" />
      </div>
    </div>
  );
}
