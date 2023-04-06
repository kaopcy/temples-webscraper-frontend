import { Variants, motion } from 'framer-motion';
import { forwardRef } from 'react';
import AllTemplesPage from '../AllTempleToolbar/AllTemplesPage';
import ModalLayout, { IModalHandler } from '../ModalLayout';
import { Icon } from '@iconify/react';
import { ProvinceEnum } from '@/types/filter.type';
import { provinceTranslator } from '@/utils/getTranslateProvince';

const ContainerVariants: Variants = {
   initial: {
      scaleX: 0.8,
      x: '-50%',
      y: '100%',
   },
   animate: {
      scaleX: 1,
      y: '-50%',
      x: '-50%',
      opacity: 1,
      transition: {
         duration: 0.3,
      },
   },
   exit: {
      scaleX: 0.8,
      y: '100%',
      opacity: 0,
      transition: {
         duration: 0.3,
      },
   },
};

const CsvPopup = forwardRef<IModalHandler>((_, ref) => {
   return (
      <ModalLayout ref={ref}>
         <motion.div
            variants={ContainerVariants}
            animate="animate"
            initial="initial"
            exit="exit"
            className="fixed top-1/2 left-1/2 flex w-[300px]  flex-col bg-[#383838]  text-white"
         >
            <div className="w-full border-b py-5 text-center text-base font-bold tracking-wide">
               โหลด csv รายชื่อวัดไทย
            </div>
            <div className="flex flex-col gap-y-4 py-4 px-10">
               {Object.keys(ProvinceEnum).map((province) => (
                  <button className="flex items-center gap-x-3">
                     <div className="h-3 w-3 border-2"></div>
                     <div className="">{provinceTranslator(province as ProvinceEnum)}</div>
                  </button>
               ))}
            </div>
            <div className="flex w-full items-center justify-center gap-x-2 border-t py-5 text-center text-base font-bold tracking-wide">
               <Icon icon="material-symbols:download-rounded" className="h-5 w-5 text-white" />
               ดาวน์โหลด
            </div>
         </motion.div>
      </ModalLayout>
   );
});

export default CsvPopup;
