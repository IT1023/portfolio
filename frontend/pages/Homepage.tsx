import Language from "../features/languages/Language";
import Theme from "../features/themes/Theme";
import Accordion from "../shared/ui/Accordion";
import Button from "../shared/ui/Button";
import Card from "../shared/ui/Card";

export default function Homepage() {
  return (
    <div className="flex-1 flex flex-col gap-2 p-2">
      <Theme />
      <Language />
      <Button />
      <Card pic="/img/me.webp" text="Always striving to be better" />
      <Accordion
        icon=""
        text="lorem ipsum dolores havnis"
        content="lorem ipsum dolores havnis lorem ipsum dolores havnis lorem ipsum dolores havnis lorem ipsum dolores havnis lorem ipsum dolores havnis lorem ipsum dolores havnis"
      />
    </div>
  );
}
