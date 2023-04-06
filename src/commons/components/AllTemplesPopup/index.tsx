import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useState, useImperativeHandle, forwardRef } from 'react';
import AllTemplesPage from '../AllTempleToolbar/AllTemplesPage';

export interface IHandler {
   open: () => void;
   close: () => void;
   toggle: () => void;
}

const OverlayVariant: Variants = {
   initial: {
      opacity: 0,
   },
   animate: {
      opacity: 1,
      transition: {
         duration: 0.5,
      },
   },
   exit: {
      opacity: 0,
      transition: {
         duration: 0.5,
      },
   },
};

const ContainerVariants: Variants = {
   initial: {
      scaleX: 0.8,
      y: '100%',
   },
   animate: {
      scaleX: 1,
      y: '0',
      opacity: 1,
      transition: {
         duration: 0.5,
      },
   },
   exit: {
      scaleX: 0.8,
      y: '100%',
      opacity: 0,
      transition: {
         duration: 0.5,
      },
   },
};

const AllTemplesPopup = forwardRef<IHandler>((_, ref) => {
   const [isOpen, setIsOpen] = useState(false);

   useImperativeHandle(
      ref,
      (): IHandler => ({
         close,
         open,
         toggle,
      }),
   );

   const close = () => {
      document.body.style.overflow = 'auto';
      setIsOpen(false);
   };
   const open = () => {
      document.body.style.overflow = 'hidden';
      setIsOpen(true);
   };
   const toggle = () => {
      setIsOpen((e) => {
         if (e) {
            document.body.style.overflow = 'auto';
         } else {
            document.body.style.overflow = 'hidden';
         }

         return !e;
      });
   };

   return (
      <AnimatePresence mode="wait">
         {isOpen && (
            <>
               <motion.div
                  onClick={close}
                  variants={OverlayVariant}
                  animate="animate"
                  initial="initial"
                  exit="exit"
                  className="fixed inset-0 z-0 bg-[#00000099]"
               ></motion.div>
               <motion.div
                  variants={ContainerVariants}
                  animate="animate"
                  initial="initial"
                  exit="exit"
                  className="fixed top-[70px] flex h-[calc(100%-70px)] w-screen flex-col items-center overflow-auto bg-white "
               >
                  <AllTemplesPage />
               </motion.div>
            </>
         )}
      </AnimatePresence>
   );
});

export default AllTemplesPopup;
