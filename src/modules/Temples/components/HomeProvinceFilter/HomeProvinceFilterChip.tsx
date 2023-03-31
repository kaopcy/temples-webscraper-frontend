// components
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import React from 'react';

import { provinceTranslator } from '@/utils/getTranslateProvince';
import { useProvinceFilter } from '../../hooks/useProvinceFilter';
import { ProvinceEnum } from '@/types/filter.type';

const HomeProvinceFilterChip: React.FC<{ provinceName: ProvinceEnum }> = ({ provinceName }) => {
   const { toggleProvince, isProvinceActive } = useProvinceFilter();

   return (
      <motion.button
         type="button"
         initial={false}
         layout
         onClick={() => toggleProvince(provinceName)}
         className={`relative flex items-center gap-x-2 rounded-2xl border-2  border-text px-6  py-0.5 hover:bg-[#00000011] ${
            isProvinceActive(provinceName) ? '!bg-text !text-white' : 'bg-white text-text'
         }`}
      >
         <motion.div
            className=""
            animate={{
               x: isProvinceActive(provinceName) ? '-10px' : '0',
            }}
         >
            {provinceTranslator(provinceName)}
         </motion.div>

         <motion.div
            initial={{ x: '-300%', opacity: 0 }}
            animate={{
               x: isProvinceActive(provinceName) ? '0%' : '-300%',
               opacity: isProvinceActive(provinceName) ? 1 : 0,
            }}
            className="absolute right-[10px]"
         >
            <Icon icon="material-symbols:close" />
         </motion.div>
      </motion.button>
   );
};

export default HomeProvinceFilterChip;
