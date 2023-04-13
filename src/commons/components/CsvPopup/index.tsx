import { url } from '@/configs/apiUrl';
import { ProvinceEnum } from '@/types/filter.type';
import { provinceTranslator } from '@/utils/getTranslateProvince';
import { Icon } from '@iconify/react';
import { HTMLMotionProps, Variants, motion, useAnimation } from 'framer-motion';
import { forwardRef, useState } from 'react';
import ModalLayout, { IModalHandler } from '../ModalLayout';

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
   const [inputState, setInputState] = useState<{ [key in keyof typeof ProvinceEnum]: boolean }>({
      yasothon: true,
      maehongson: true,
      mahasarakam: true,
      mukdaharn: true,
   });

   const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      const cur = event.target.name as ProvinceEnum;

      setInputState((e) => ({
         ...e,
         [cur]: !e[cur],
      }));
   };

   const onDownloadClick: React.MouseEventHandler<HTMLButtonElement> = async () => {
      const provinceQuery = Object.entries(inputState)
         .filter(([_, v]) => v)
         .map(([k]) => k)
         .join(',');

      const fileName = Object.entries(inputState)
         .filter(([_, v]) => v)
         .map(([k]) => k)
         .join('_');

      const response = await url.getCsv({ provinces: provinceQuery });

      const hiddenElement = document.createElement('a');

      hiddenElement.href =
         'data:text/csv;charset=utf-16,' +
         encodeURIComponent('\uFEFF' + (await response.data.text()));

      hiddenElement.target = '_blank';
      hiddenElement.download = `${fileName}.csv`;
      hiddenElement.click();
   };

   return (
      <ModalLayout ref={ref}>
         <motion.div
            variants={ContainerVariants}
            animate="animate"
            initial="initial"
            exit="exit"
            className="fixed top-1/2 left-1/2 flex w-[300px] flex-col overflow-hidden  rounded-md bg-[#383838]  text-white"
         >
            <div className="w-full border-b py-5 text-center text-base font-bold tracking-wide">
               โหลด csv รายชื่อวัดไทย
            </div>
            <div className="flex flex-col gap-y-4 py-4 px-10">
               {Object.entries(inputState).map(([province, isChecked]) => (
                  <button key={province} className="flex items-center gap-x-3">
                     <input
                        checked={isChecked}
                        value={province}
                        onChange={onChange}
                        name={province}
                        id={province}
                        type="checkbox"
                        className="hidden h-3 w-3"
                     />
                     <MotionDiv isChecked={isChecked} province={province} />
                  </button>
               ))}
            </div>
            <button
               type="button"
               onClick={onDownloadClick}
               className="flex w-full items-center justify-center gap-x-2 border-t py-5 text-center text-base font-bold tracking-wide hover:bg-[#00000022]"
            >
               <Icon icon="material-symbols:download-rounded" className="h-5 w-5 text-white" />
               ดาวน์โหลด
            </button>
         </motion.div>
      </ModalLayout>
   );
});

const MotionDiv: React.FC<HTMLMotionProps<'label'> & { isChecked: boolean; province: string }> = ({
   isChecked,
   province,
   ...rest
}) => {
   const labelControl = useAnimation();

   const handleClick = async () => {
      await labelControl.start({
         fontSize: '17px',
         transition: { duration: 0.1, ease: 'easeInOut' },
      });
      await labelControl.start({
         fontSize: '16px',
         transition: { duration: 0.3, type: 'spring', stiffness: 120, bounce: 0.2 },
      });
   };

   return (
      <motion.label
         {...rest}
         className="flex w-full items-center gap-x-3"
         onClick={handleClick}
         whileTap={{ fontSize: '12px' }}
         htmlFor={province}
         animate={labelControl}
      >
         <div className="relative flex h-3.5 w-3.5 cursor-pointer items-center  justify-center overflow-hidden border-2 bg-white">
            <motion.div
               animate={isChecked ? { x: 0, opacity: 1 } : { x: '-100%' }}
               transition={{
                  duration: 0.3,
                  type: 'spring',
                  stiffness: 120,
                  bounce: 0.2,
               }}
               className="absolute"
            >
               <Icon
                  icon="material-symbols:check-small-rounded"
                  className="  h-3.5 w-3.5 bg-blue-600 text-white"
               />
            </motion.div>
         </div>
         <div className="cursor-pointer">{provinceTranslator(province as ProvinceEnum)}</div>
      </motion.label>
   );
};

export default CsvPopup;
