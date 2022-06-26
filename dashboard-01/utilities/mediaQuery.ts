export const Breakpoints: { [index: string]: number } = {
  XS: 768,
};

export const mq = Object.keys(Breakpoints)
  .map((key) => [key, Breakpoints[key]] as [string, number])
  .reduce((prev, [key, breakpoint]) => {
    prev[key] = `@media (min-width: ${breakpoint}px)`;
    return prev;
  }, {} as { [index: string]: string });
