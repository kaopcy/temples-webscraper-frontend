import { useState } from 'react';
import { Variants, motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import AllTemplesToolbar from '../AllTempleToolbar';

const ChildVariants: Variants = {
   initial: {
      opacity: 0,
      y: 0,
   },
   animate: ({ isOpen, index }: { isOpen: boolean; index: number }) => ({
      ...(isOpen
         ? {
              opacity: 1,
              y: index * -65,
              transition: {
                 type: 'spring',
                 duration: 1,
                 delayChildren: 0.1,
                 stiffness: 120,
              },
           }
         : {
              opacity: 0,
              y: 0,
              transition: {
                 duration: 0.5,
                 delayChildren: 0.1,
                 stiffness: 260,
                 ease: 'anticipate',
              },
           }),
   }),
};

const Toolbar = () => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <motion.div
         animate={{ transition: { staggerChildren: 0.7 } }}
         className="fixed bottom-7 right-32 flex h-[60px] w-[60px] items-center justify-center  "
      >
         <motion.button
            whileTap={{ scale: 1.1, transition: { duration: 0.2 } }}
            onClick={() => setIsOpen((e) => !e)}
            className="absolute inset-0 z-10 flex items-center justify-center rounded-full  border-[3px] border-text bg-white"
         >
            <Icon icon="material-symbols:wysiwyg" className="h-6 w-6" />
         </motion.button>
         <motion.div
            variants={ChildVariants}
            animate={'animate'}
            custom={{ isOpen, index: 1 }}
            className="absolute flex h-[60px] w-[60px] items-center justify-center rounded-full  border-[3px] border-text bg-white"
         >
            <Icon icon="material-symbols:wysiwyg" className="h-6 w-6" />
         </motion.div>
         <motion.div
            variants={ChildVariants}
            animate={'animate'}
            custom={{ isOpen, index: 2 }}
            className=" flex h-[60px] w-[60px] items-center justify-center rounded-full  border-[3px] border-text bg-white"
         >
            <AllTemplesToolbar />
         </motion.div>
         <motion.div
            variants={ChildVariants}
            animate={'animate'}
            custom={{ isOpen, index: 3 }}
            className="absolute flex h-[60px] w-[60px] items-center justify-center rounded-full  border-[3px] border-text bg-white"
         >
            <Icon icon="material-symbols:wysiwyg" className="h-6 w-6" />
         </motion.div>
      </motion.div>
   );
};

export default Toolbar;
