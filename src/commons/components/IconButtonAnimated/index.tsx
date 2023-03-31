import { IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

const IconButtonAnimated: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   return (
      <AnimateWraper>
         <IconButton>{children}</IconButton>;
      </AnimateWraper>
   );
};

const varMedium = {
   hover: { scale: 1.09 },
   tap: { scale: 0.97 },
};

interface AnimateWraperProps {
   children: React.ReactNode;
}

const AnimateWraper: React.FC<AnimateWraperProps> = ({ children }) => {
   return (
      <motion.div variants={varMedium} whileTap="tap" whileHover="hover" className="">
         {children}
      </motion.div>
   );
};

export default IconButtonAnimated;
