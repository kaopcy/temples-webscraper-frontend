import { Icon } from '@iconify/react';
import { Tooltip } from '@mui/material';
import { HTMLMotionProps, Variants, motion } from 'framer-motion';

const TooltipVariants: Variants = {
   open: (index) => ({
      y: index * 50,
      opacity: 1,
      transition: {
         type: 'spring',
         bounce: 0.2,
         duration: 2,
         delay: 0.3,
         stiffness: 120,
         staggerChildren: 0.2,
      },
   }),
   closed: {
      y: 0,
      opacity: 0,
      transition: {
         type: 'spring',
         bounce: 0.2,
         duration: 1,
      },
   },
};

interface ITempleTooltip {
   isOpen: boolean;
   icon: string;
   title: string;
   index: number;
}

const TempleTooltip: React.FC<HTMLMotionProps<'button'> & ITempleTooltip> = ({
   isOpen,
   icon,
   index,
   title,
   ...rest
}) => {
   return (
      <motion.button
         variants={TooltipVariants}
         custom={index}
         initial="closed"
         animate={isOpen ? 'open' : 'closed'}
         className="absolute inset-0 flex  cursor-pointer items-center justify-center"
         {...rest}
      >
         <Tooltip placement="left" className="font-primary" title={title}>
            <Icon className="h-6 w-6 text-text" icon={icon} />
         </Tooltip>
      </motion.button>
   );
};
``;
export default TempleTooltip;
