import { motion, Variants } from 'framer-motion';

const wrapperVariants: Variants = {
   initial: {
      clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0% 100%)',
      WebkitClipPath: 'polygon(0 0, 0% 0, 0% 100%, 0% 100%)',
      transition: { ease: 'easeInOut', duration: 0.7 },
   },
   animate: {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      WebkitClipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      transition: { ease: 'easeInOut', duration: 0.7 },
   },
   exit: {
      clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
      WebkitClipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
      transition: { ease: 'easeInOut', duration: 0.7 },
   },
};

const insideMotionVariants: Variants = {
   initial: {
      x: '-50vw',
   },
   animate: {
      x: 0,
   },
   exit: {
      x: '50vw',
   },
};

const Layout: React.FC<{ children: React.ReactNode; pageKey: string }> = ({
   children,
   pageKey,
}) => {

   return (
      <motion.div
         key={pageKey}
         variants={wrapperVariants}
         initial="initial"
         animate="animate"
         exit="exit"
         className="bg-white"
      >
         <motion.div
            key={pageKey}
            variants={insideMotionVariants}
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}
            transition={{
               duration: 1,
               ease: 'easeInOut',
            }}
         >
            {children}
         </motion.div>
      </motion.div>
   );
};
export default Layout;
