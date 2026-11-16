import Tablist from "../../shared/ui/Tablist";
import Tech from "../../shared/ui/Tech";

export default function Hero() {
  return (
    <div className="w-full min-h-75 flex justify-center">
      <div className="container flex-1 max-w-7xl p-2">
        <Tech />
        <Tablist />
      </div>
    </div>
  );
}
