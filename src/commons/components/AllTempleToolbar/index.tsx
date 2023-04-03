import { Icon } from '@iconify/react';
import { HTMLMotionProps, Variants, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';
import AllTemplesPage from './AllTemplesPage';
import TempleTooltip from './TempleTooltip';

const outerVariants: Variants = {
   open: {
      clipPath: 'circle(1000px at 56% 53%)',
      transition: {
         type: 'spring',
         bounce: 0.2,
         duration: 1.5,
         delayChildren: 0.3,
         staggerChildren: 0.05,
      },
   },
   closed: {
      clipPath: 'circle(30px at 85% 92%)',
      transition: {
         type: 'spring',
         bounce: 0,
         duration: 0.7,
      },
   },
};

const innerVariants: Variants = {
   open: {
      clipPath: 'circle(1000px at 56% 53%)',
      transition: {
         type: 'spring',
         bounce: 0.2,
         duration: 1.5,
         staggerChildren: 0.05,
      },
   },
   closed: {
      clipPath: 'circle(28px at 85% 92%)',
      transition: {
         type: 'spring',
         bounce: 0,
         duration: 0.7,
      },
   },
};

const ActionButtonVariants: Variants = {
   open: {
      top: '10%',
      transition: {
         type: 'spring',
         bounce: 0.2,
         duration: 1,
         delayChildren: 2,
         staggerChildren: 0.05,
      },
   },
   closed: {
      top: '92%',
      transition: {
         type: 'spring',
         bounce: 0.2,
         duration: 1,
      },
   },
};

const AllTemplesToolbar: React.FC<HTMLMotionProps<'div'>> = ({ ...props }) => {
   const [isOpen, setIsOpen] = useState(false);
   const { push } = useRouter();

   const onHomeClick = () => {
      setIsOpen(false);
      push('/temples/1', '/temples/1', { scroll: false });
   };

   const onCsvClick = () => {
      alert('CSV clicked ');
   };
   const onRegexClick = () => {
      setIsOpen(false);
      push('/regex-explain', '/regex-explain', { scroll: false });
   };

   return (
      <motion.div
         initial="closed"
         animate={isOpen ? 'open' : 'closed'}
         variants={outerVariants}
         className="fixed top-0 left-0 h-screen w-screen rounded-md bg-text "
         {...props}
      >
         <motion.div
            className="relative flex h-full w-full flex-col items-center overflow-y-scroll bg-white"
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            variants={innerVariants}
         >
            <AllTemplesPage />
         </motion.div>
         <motion.div
            variants={ActionButtonVariants}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            className="absolute top-[92%] left-[85%]  flex h-20 w-20 shrink-0 -translate-x-1/2 -translate-y-1/2 items-center  justify-center border-none "
         >
            <div
               onClick={() => setIsOpen((e) => !e)}
               className="z-10 flex h-14 w-14 cursor-pointer items-center justify-center"
            >
               {isOpen ? (
                  <Icon className="h-6 w-6 text-text" icon="material-symbols:close" />
               ) : (
                  <Icon className="h-6 w-6 text-text" icon="material-symbols:wysiwyg" />
               )}
            </div>
            <TempleTooltip
               onClick={onHomeClick}
               icon="tabler:home"
               index={1}
               isOpen={isOpen}
               title="หน้าหลัก"
            />
            <TempleTooltip
               onClick={onCsvClick}
               icon="ph:file-csv-duotone"
               index={2}
               isOpen={isOpen}
               title="ไฟล์ CSV"
            />
            <TempleTooltip
               onClick={onRegexClick}
               icon="mdi:regex"
               index={3}
               isOpen={isOpen}
               title="อธิบาย Regular expression"
            />
         </motion.div>
      </motion.div>
   );
};

export default AllTemplesToolbar;
