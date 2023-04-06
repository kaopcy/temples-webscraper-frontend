import { HTMLMotionProps, Variants, motion } from 'framer-motion';
import { forwardRef } from 'react';
import AllTemplesPage from '../AllTempleToolbar/AllTemplesPage';
import ModalLayout, { IModalHandler } from '../ModalLayout';

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
         duration: 0.3,
      },
   },
   exit: {
      scaleX: 0.8,
      y: '100%',
      opacity: 0,
      transition: {
         duration: 0.3,
      },
   },
};

const AllTemplesPopup = forwardRef<IModalHandler, HTMLMotionProps<'div'>>(({ ...rest }, ref) => {
   return (
      <ModalLayout ref={ref}>
         <motion.div
            variants={ContainerVariants}
            animate="animate"
            initial="initial"
            exit="exit"
            className="fixed top-[70px] flex h-[calc(100%-70px)] w-screen flex-col items-center overflow-auto bg-white "
            {...rest}
         >
            <AllTemplesPage />
         </motion.div>
      </ModalLayout>
   );
});

export default AllTemplesPopup;
