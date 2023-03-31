import { motion } from 'framer-motion';
import React, { memo } from 'react';
import { useTimeout } from 'react-use';

import { useProvinceFilter } from '../../hooks/useProvinceFilter';
import { ProvinceEnum } from '@/types/filter.type';

import HomeProvinceFilterChip from './HomeProvinceFilterChip';

const HomeProvinceFilter: React.FC = () => {
   const { unActiveProvinceFilter, activeProvinceFilter } = useProvinceFilter();

   const provinceList = [...activeProvinceFilter.sort(), ...unActiveProvinceFilter.sort()].map((provinceName) => (
      <HomeProvinceFilterChip key={provinceName} provinceName={provinceName as ProvinceEnum} />
   ));

   return (
      <motion.div className="mb-10 flex flex-wrap items-center justify-center gap-2">
         {provinceList}
      </motion.div>
   );
};

export default HomeProvinceFilter;
