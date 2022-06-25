export const Breakpoints: { [index: string]: number } = {
  XS: 420,
  SM: 576,
  MD: 768,
  LG: 992,
  XL: 1200,
};

export const mq = Object.keys(Breakpoints)
  .map((key) => [key, Breakpoints[key]] as [string, number])
  .reduce((prev, [key, breakpoint]) => {
    prev[key] = `@media (min-width: ${breakpoint}px)`;
    return prev;
  }, {} as { [index: string]: string });
