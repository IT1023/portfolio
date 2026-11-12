import useProgress from "./useProgress";

export default function Progress() {
  const { position } = useProgress();

  return (
    <div
      style={{ width: position + "%" }}
      className={`absolute top-0 left-0 bg-primary h-0.5 transition-all duration-100 ease-in-out`}
    ></div>
  );
}
