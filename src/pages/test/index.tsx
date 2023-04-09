import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import TestComponent from './testComponent';

const Test: React.FC = () => {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <div className="relative flex min-h-screen w-full flex-col items-center">
         <TestComponent />
         <TestComponent />
         <TestComponent />
         <TestComponent />
      </div>
   );
};

export default Test;
