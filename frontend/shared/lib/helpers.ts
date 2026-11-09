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
