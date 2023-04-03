import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const Test: React.FC = () => {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <div className="relative flex min-h-screen w-full flex-col items-center">
         <div className="fixed bottom-10 right-10 h-20 w-20 bg-red-500">
            <div className="absolute  top-0 left-0 h-10 w-10 rounded-full bg-white">
               <div
                  className="fixed  inset-0 top-0 left-0 z-10 bg-blue-500"
                  style={{
                     clipPath: '10% 90% 10% 10% ',
                  }}
               ></div>
            </div>
         </div>
      </div>
   );
};

export default Test;
