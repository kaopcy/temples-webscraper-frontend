export const classname = (...args: string[]): string => {
   return args.reduce((acc, cur) => (cur ? `${acc} ${cur}` : acc));
};
