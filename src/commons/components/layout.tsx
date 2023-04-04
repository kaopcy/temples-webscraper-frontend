import { motion, Variants } from 'framer-motion';
import { useContext, useEffect } from 'react';
import { PageTransitionContext } from '../contexts/PageTransitionContext';
import { useReducedMotionVariant } from '@/hooks/useReducedMotionVariants';

const wrapperVariants: Variants = {
   initial: (isRight: number) => ({
      clipPath: isRight
         ? 'polygon(0 0, 0% 0, 0% 100%, 0% 100%)'
         : 'polygon(0 0, 0% 0, 0% 100%, 0% 100%)',
      transition: { duration: 0.7 },
   }),
   animate: (isRight: number) => ({
      clipPath: isRight
         ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
         : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      transition: { duration: 0.7, staggerChildren: 0.2 },
   }),
   exit: (isRight: number) => ({
      clipPath: isRight
         ? 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'
         : 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
      transition: { duration: 0.7 },
   }),
};

const insideMotionVariants: Variants = {
   initial: (isRight: boolean) => ({
      x:  '-50vw',
      // x: isRight ? '50vw' : '-50vw',
   }),
   animate: (isRight: boolean) => ({
      x: 0,
   }),
   exit: (isRight: boolean) => ({
      x:  '50vw',
      // x: isRight ? '-40vw' : '50vw',
   }),
};

const Layout: React.FC<{ children: React.ReactNode; pageKey: string }> = ({
   children,
   pageKey,
}) => {
   const { isRight } = useContext(PageTransitionContext);

   const { getReducedVariant, isMobile } = useReducedMotionVariant();

   useEffect(() => {
      console.log('isMobile: ', isMobile ? 'yes' : 'no');
   }, [isMobile]);

   return (
      <motion.div
         key={pageKey}
         custom={isRight(pageKey)}
         variants={wrapperVariants}
         initial="initial"
         animate="animate"
         exit="exit"
         className="bg-white"
      >
         <motion.div
            key={pageKey}
            custom={isRight(pageKey)}
            variants={insideMotionVariants}
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}
            transition={{
               duration: 1,
            }}
         >
            {children}
         </motion.div>
      </motion.div>
   );
};
export default Layout;
