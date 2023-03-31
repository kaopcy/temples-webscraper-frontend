export const arrayToQuote = (strArr: string[]): string => {
   if (strArr.length === 1) return `${strArr}`;
   return strArr.reduce((acc, cur, index) => {
      // eslint-disable-next-line no-nested-ternary
      return `${acc}${strArr.length - 1 === index ? 'และ' : acc ? ', ' : ''}${cur}`;
   }, '');
};
