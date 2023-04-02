import { Variants } from 'framer-motion';
import { useMedia } from 'react-use';

export const useReducedMotionVariant = () => {
   const isMobile = useMedia('(max-width: 480px)');

   const getReducedVariant = (variant: Variants): Variants => {
      return Object.fromEntries(
         Object.entries(variant).map((key, variant) => (isMobile ? [key, {}] : [key, variant])),
      );
   };
   return { getReducedVariant };
};
