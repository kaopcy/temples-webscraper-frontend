import { HTMLMotionProps, Variants, motion } from 'framer-motion';

import { Icon } from '@iconify/react';
import AllTemplesPopup, { IHandler } from '../AllTemplesPopup';
import { useRef } from 'react';
import { useRouter } from 'next/router';

const AppToolbar = () => {
   const allTemplePopupRef = useRef<IHandler>(null);
   const { push } = useRouter();

   const onAllTemplesClick = () => {
      allTemplePopupRef.current?.toggle();
   };
   const onRegexClick = () => {
      push('/regex-explain', '/regex-explain', { scroll: false });
   };
   const onCsvClick = () => {
      push('/regex-explain', '/regex-explain', { scroll: false });
   };

   return (
      <>
         <AllTemplesPopup ref={allTemplePopupRef} />
         <div className="fixed bottom-10 right-20 flex flex-col-reverse items-center gap-y-5">
            <IconButton
               icon="fluent:text-bullet-list-square-24-regular"
               description="รายชื่อวัดทั้งหมด"
               onClick={onAllTemplesClick}
            />
            <IconButton icon="ph:file-csv-light" description="ไฟล์ csv" onClick={onCsvClick} />
            <IconButton
               icon="mdi:regular-expression"
               description="อธิบาย regular expression"
               onClick={onRegexClick}
            />
         </div>
      </>
   );
};

interface IIconButtonProps {
   description: string;
   icon: string;
}

const ButtonVariants: Variants = {
   rest: {},
   hover: {
      scale: 1.05,
   },
};

const IconVariants: Variants = {
   hover: {
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

const IconButton: React.FC<HTMLMotionProps<'button'> & IIconButtonProps> = ({
   description,
   icon,
   ...rest
}) => {
   return (
      <motion.button
         variants={ButtonVariants}
         initial="rest"
         whileHover="hover"
         animate="rest"
         className="relative z-10 flex h-14   w-14 cursor-pointer items-center rounded-full border-2 border-text"
         {...rest}
      >
         <div className="z-10 flex h-full  w-full items-center justify-center rounded-full bg-white">
            <motion.div variants={IconVariants}>
               <Icon className="h-6 w-6 text-text" icon={icon} />
            </motion.div>
         </div>

         <motion.div
            variants={DescriptionVariants}
            className="absolute right-[130%] z-0 whitespace-nowrap rounded-full bg-text py-0.5 px-4 text-sm text-white"
         >
            {description}
         </motion.div>
      </motion.button>
   );
};

export default AppToolbar;
