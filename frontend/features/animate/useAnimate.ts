import { useEffect, useRef, useState, type RefObject } from "react";

interface UseAnimateReturns {
  isCrossed: boolean;
  sentinelRef: RefObject<HTMLDivElement | null>;
}

export default function useAnimate(): UseAnimateReturns {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isCrossed, setIsCrossed] = useState<boolean>(false);

  useEffect(() => {
    const element = sentinelRef.current;
    if (!element) return;
    const intersection = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsCrossed(true);
            intersection.disconnect();
          }
        });
      },
      {
        threshold: 0.75,
      },
    );
    intersection.observe(element);
    return () => {
      if (!element) return;
      intersection.disconnect();
    };
  }, []);

  return { isCrossed, sentinelRef };
}
