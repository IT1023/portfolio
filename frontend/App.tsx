import Theme from "./features/themes/Theme";

const test = [
  "background",
  "foreground",
  "primary",
  "secondary",
  "info",
  "warning",
  "error",
  "success",
];

function App() {
  return (
    <div className="w-screen h-screen bg-background p-2 font-mono font-semibold flex flex-col gap-2">
      <Theme />
      {test.map((t) => {
        return (
          <div
            key={t}
            className={`w-fit min-w-30 border capitalize p-2 bg-${t}`}
          >
            {t}
          </div>
        );
      })}
    </div>
  );
}

export default App;
