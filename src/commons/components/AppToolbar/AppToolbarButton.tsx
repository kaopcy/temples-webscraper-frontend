import { HTMLMotionProps, Variants, motion } from 'framer-motion';

import { Icon } from '@iconify/react';
import { useRouterChange } from '@/hooks/useRouterChange';
import { classname } from '@/utils/getClassname';

const ButtonVariants: Variants = {
   rest: (active) => ({
   }),
   hover: (active) => ({
      scale: 1.1,
   }),
};

const IconVariants: Variants = {
   initial: {
      x: 20,
      transition: {
         duration: 0.4,
         type: 'tween',
         ease: 'easeOut',
      },
   },
   animate: {
      x: 0,
      transition: {
         duration: 0.4,
         type: 'tween',
         ease: 'easeOut',
      },
   },
   exit: {
      x: -20,
      transition: {
         duration: 0.4,
         type: 'tween',
         ease: 'easeOut',
      },
   },
};
const DescriptionVariants: Variants = {
   rest: {
      x: 50,
      opacity: 0,
      transition: {
         duration: 0.3,
         type: 'tween',
         ease: 'easeInOut',
      },
   },
   hover: {
      x: '0%',
      opacity: 1,
      transition: {
         duration: 0.4,
         stiffness: 220,
         bounce: 0.1,
         type: 'spring',
         mass: 0.5,
      },
   },
};

interface IIconButtonProps {
   description: string;
   icon: string;
   active: boolean;
}

const AppToolbarButton: React.FC<HTMLMotionProps<'button'> & IIconButtonProps> = ({
   description,
   icon,
   active,
   ...rest
}) => {
   const { state } = useRouterChange();

   return (
      <motion.button
         disabled={active}
         variants={ButtonVariants}
         custom={active}
         initial="rest"
         whileHover="hover"
         animate="rest"
         className={classname(
            'relative z-10 flex h-10 w-10   cursor-pointer items-center rounded-full border-2  md:h-14 md:w-14',
            active ? 'border-text' : 'border-text',
         )}
         {...rest}
      >
         <div
            className={classname(
               'z-10 flex h-full  w-full items-center justify-center rounded-full ',
               active ? 'bg-text text-white' : 'bg-white text-text',
            )}
         >
            <motion.div custom={active} variants={IconVariants}>
               <Icon
                  className={classname('h-5 w-5  md:h-6 md:w-6', state ? 'animate-spin' : '')}
                  icon={state ? 'mingcute:loading-3-line' : icon}
               />
            </motion.div>
         </div>

         <motion.div
            variants={DescriptionVariants}
            className="absolute pointer-events-none right-[130%] z-0 whitespace-nowrap rounded-full bg-text py-0.5 px-4 text-sm text-white"
         >
            {description}
         </motion.div>
      </motion.button>
   );
};

export default AppToolbarButton;
