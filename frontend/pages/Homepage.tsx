import Language from "../features/languages/Language";
import Theme from "../features/themes/Theme";
import Button from "../shared/ui/Button";

export default function Homepage() {
  return (
    <div className="flex flex-col gap-2 p-2">
      <Theme />
      <Language />
      <Button />
    </div>
  );
}
