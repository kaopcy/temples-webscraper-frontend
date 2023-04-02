import { ProvinceEnum } from '@/types/filter.type';
import { IProvince, ITemple } from '@/types/temple.type';
import { provinceTranslator } from '@/utils/getTranslateProvince';
import { Icon } from '@iconify/react';
import axios from 'axios';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

const variants: Variants = {
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
const variants2: Variants = {
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

const IconVariants: Variants = {
   open: {
      top: '10%',
      transition: {
         type: 'spring',
         bounce: 0.2,
         duration: 1,
         delayChildren: 0.3,
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

const Toolbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [provinces, setTemples] = useState<IProvince[] | null>(null);

   useEffect(() => {
      const fetch = async () => {
         const { data } = await axios.get<IProvince[]>(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/province`,
         );
         setTemples(data);
      };
      fetch();
   }, []);

   return (
      <motion.section
         initial="closed"
         animate={isOpen ? 'open' : 'closed'}
         variants={variants}
         className="fixed bottom-0 right-0 h-full w-full rounded-md bg-text "
      >
         <motion.div
            className="relative flex h-full w-full flex-col items-center overflow-y-scroll bg-white"
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            variants={variants2}
         >
            <div className="mt-[100px] flex w-full max-w-[800px] flex-wrap items-start justify-between px-4 pb-20 md:mt-[65px]">
               {provinces &&
                  provinces.map((province) => (
                     <div key={province._id} className="flex flex-col items-start gap-y-3">
                        <b className="mb-2 text-text">
                           จังหวัด{provinceTranslator(province.name as ProvinceEnum)} (
                           {province.temples.length})
                        </b>
                        {province.temples
                           .sort((a, b) => b.name.length - a.name.length)
                           ?.map((temple: ITemple) => (
                              <span
                                 key={temple._id}
                                 className="flex items-center text-base text-text"
                              >
                                 {temple.name}
                              </span>
                           ))}
                     </div>
                  ))}
            </div>
         </motion.div>
         <motion.button
            type="button"
            onClick={() => setIsOpen((e) => !e)}
            variants={IconVariants}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            className="absolute top-[92%] left-[85%] flex h-20 w-20 shrink-0 -translate-x-1/2 -translate-y-1/2 items-center  justify-center border-none "
         >
            {isOpen ? (
               <Icon className="h-6 w-6 text-text" icon="material-symbols:close" />
            ) : (
               <Icon className="h-6 w-6 text-text" icon="material-symbols:wysiwyg" />
            )}
         </motion.button>
      </motion.section>
   );
};

const Province: React.FC<{ title: string }> = ({ title }) => {
   return (
      <div className="flex flex-col items-start text-base">
         <div className="font-bold "></div>
      </div>
   );
};

export default Toolbar;