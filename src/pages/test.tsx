import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const Test: React.FC = () => {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <div className="relative flex min-h-screen w-full flex-col items-center">
         <AnimatePresence>
            {!isOpen && (
               <motion.div
               initial={{
                  clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
                }}
                animate={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                  transition: { duration: 0.7, staggerChildren: 0.2 },
                }}
                exit={{
                  clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0 100%)',
                  transition: { duration: 0.7, staggerChildren: 0.2 },
                }}
                  className="absolute top-1/2 left-1/2 h-20 w-20 bg-red-500"
               ></motion.div>
            )}
         </AnimatePresence>

         <button
            className="z-10 rounded-md bg-white p-10 text-lg font-bold hover:bg-red-200"
            onClick={() => setIsOpen((e) => !e)}
         >
            click
         </button>
      </div>
   );
};

export default Test;
