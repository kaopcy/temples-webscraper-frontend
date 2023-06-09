import { Variants } from 'framer-motion';
import { useMedia } from 'react-use';

export const useReducedMotionVariant = () => {
   const isMobile = useMedia('(max-width: 768px)', false);
   const isDesktop = useMedia('(min-width: 768px)', false);

   const getReducedVariant = (variant: Variants): Variants => {
      const a = Object.fromEntries(
         Object.entries(variant).map((key, variant) => (isMobile ? [key, variant] : [key, {}])),
      );
      return a;
   };
   return { getReducedVariant, isMobile, isDesktop };
};
