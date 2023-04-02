import { motion } from 'framer-motion';
import React, { memo } from 'react';
import { useTimeout } from 'react-use';

import { useProvinceFilter } from '../../hooks/useProvinceFilter';
import { ProvinceEnum } from '@/types/filter.type';

import HomeProvinceFilterChip from './HomeProvinceFilterChip';

const HomeProvinceFilter: React.FC = () => {
   const { unActiveProvinceFilter, activeProvinceFilter, error } = useProvinceFilter();

   const provinceList = [...activeProvinceFilter.sort(), ...unActiveProvinceFilter.sort()].map(
      (provinceName) => (
         <HomeProvinceFilterChip key={provinceName} provinceName={provinceName as ProvinceEnum} />
      ),
   );

   return (
      <>
         <motion.div className="relative mb-10 flex flex-wrap items-center justify-center gap-2">
            {provinceList}
            {error && <div className="absolute  left-0 text-error text-xs  top-[110%]">{error}</div>}
         </motion.div>
      </>
   );
};

export default HomeProvinceFilter;
