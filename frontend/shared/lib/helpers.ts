export const throttle = <T extends (...args: unknown[]) => unknown>(
  fn: T,
  cooldown: number,
) => {
  let lastCalled: number = 0;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCalled < cooldown) return;
    lastCalled = now;
    fn(...args);
  };
};

export const getRandomNumber = (min: number = -Infinity, max = Infinity) => {
  return min + Math.floor(Math.random() * (max - min));
};

export const generateUniqueString = () => {
  const chars = "AZERTYUIOPMLKJHGFDSQWXCVBN0123456789";
  const len = 10;
  return Array.from(
    { length: len },
    () => chars[getRandomNumber(0, chars.length)],
  ).join("");
};

const pick = <T>(items: readonly T[]): T =>
  items[Math.floor(Math.random() * items.length)];

export const randomAnimation = () => {
  const axis = pick(["x", "y"] as const);
  const offset = axis === "y" ? "50px" : pick(["50px", "-50px"] as const);

  return {
    initial: { [axis]: offset },
    animate: { [axis]: "0px" },
    exit: { [axis]: offset },
    transition: { duration: 0.6, ease: "easeInOut" as const },
  };
};
