import Project from "../../shared/ui/Project";
import Square from "../../shared/ui/Square";
import Tablist from "../../shared/ui/Tablist";
import Tech from "../../shared/ui/Tech";

export default function Hero() {
  return (
    <div className="w-full min-h-75 flex justify-center">
      <div className="container flex-1 max-w-7xl p-2">
        <Square />
        <Project />
        <Tech />
        <Tablist />
      </div>
    </div>
  );
}
