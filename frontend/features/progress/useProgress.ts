import { useEffect, useState } from "react";

export default function useProgress() {
  const [position, setPosition] = useState<number>(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScroll = window.scrollY;
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.floor((currentScroll * 100) / scrollableHeight);
      setPosition(progress);
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return { position };
}
