import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import React from 'react';

const SidebarLoading: React.FC = () => {
   return (
      <motion.div className="">
         <Icon icon="mingcute:loading-3-line" className="h-10 w-10 animate-spin" />
      </motion.div>
   );
};

export default SidebarLoading;
