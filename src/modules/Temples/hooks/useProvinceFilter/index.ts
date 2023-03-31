import { useCallback, useEffect, useMemo, useState } from 'react';
import { useEffectOnce, useUpdateEffect } from 'react-use';

import { IProvinceFilterState, provinceFilterActions } from '../../redux/provinceFilter';
import { useDispatch, useSelector } from '@/redux/store';
import { ProvinceEnum } from '@/types/filter.type';
import { useRouter } from 'next/router';

type ReturnType = {
   toggleProvince: (provinceName: ProvinceEnum) => void;
   isProvinceActive: (provinceName: ProvinceEnum) => boolean;
   allProvinceFilter: (keyof typeof ProvinceEnum)[];
   unActiveProvinceFilter: ProvinceEnum[];
   activeProvinceFilter: ProvinceEnum[];
} & IProvinceFilterState;

const allProvinceFilter = Object.keys(ProvinceEnum) as ProvinceEnum[];

export const useProvinceFilter = (): ReturnType => {
   const provinceFilterState = useSelector((state) => state.provinceFilter);
   const { provinceFilter } = provinceFilterState;

   const unActiveProvinceFilter = useMemo(() => {
      return allProvinceFilter.filter((each) => !provinceFilter.includes(each));
   }, [provinceFilter]);

   const activeProvinceFilter = useMemo(() => {
      return allProvinceFilter.filter((each) => provinceFilter.includes(each));
   }, [provinceFilter]);

   const dispatch = useDispatch();

   const isProvinceActive = useCallback(
      (provinceName: ProvinceEnum) => {
         return provinceFilter.includes(provinceName);
      },
      [provinceFilter],
   );

   const toggleProvince = (provinceName: ProvinceEnum) => {
      dispatch(provinceFilterActions.toggleFilter({ province: provinceName }));
   };

   /**
    * the reason for doing this instead of useMemo
    * is to toggle rerendering process if i manipulate array with its methods
    * it won't toggling the rerender unless i assign a new array into it
    * so using useEffect + useState to handle this instead of useMemo
    * (for animating using Framer motion's layout animate i must toggle rerender)
    */
   return {
      ...provinceFilterState,
      unActiveProvinceFilter,
      activeProvinceFilter,
      allProvinceFilter,
      toggleProvince,
      isProvinceActive,
   };
};
