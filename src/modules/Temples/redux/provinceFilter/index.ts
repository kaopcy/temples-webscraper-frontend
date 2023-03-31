import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProvinceEnum, ProvinceFilter } from '@/types/filter.type';
import { HYDRATE } from 'next-redux-wrapper';

export interface IProvinceFilterState {
   provinceFilter: ProvinceFilter;
}

const initialState: IProvinceFilterState = {
   provinceFilter: [],
};

type PayloadAddFilter = PayloadAction<{ provinces: ProvinceEnum[] | ProvinceEnum }>;
type PayloadDeleteFilter = PayloadAction<{ provinces: ProvinceEnum[] | ProvinceEnum }>;
type PayloadToggleFilter = PayloadAction<{ province: ProvinceEnum }>;

const ProvinceFilterSlice = createSlice({
   name: 'provinceFilter',
   initialState,
   reducers: {
      initFilter: (state, { payload: { provinces } }: PayloadAddFilter) => {
         if (Array.isArray(provinces))
            provinces.forEach((province) => {
               const index = state.provinceFilter.indexOf(province);
               if (index === -1) {
                  state.provinceFilter.push(province);
               }
            });
         else {
            const index = state.provinceFilter.indexOf(provinces);
            if (index === -1) {
               state.provinceFilter.push(provinces);
            }
         }
      },
      addFilter: (state, { payload: { provinces } }: PayloadAddFilter) => {
         if (Array.isArray(provinces))
            provinces.forEach((province) => {
               const index = state.provinceFilter.indexOf(province);
               if (index === -1) {
                  state.provinceFilter.push(province);
               }
            });
         else {
            const index = state.provinceFilter.indexOf(provinces);
            if (index === -1) {
               state.provinceFilter.push(provinces);
            }
         }
      },
      deleteFilter: (state, { payload: { provinces } }: PayloadDeleteFilter) => {
         if (Array.isArray(provinces))
            provinces.forEach((province) => {
               const index = state.provinceFilter.indexOf(province);
               if (index !== -1) {
                  state.provinceFilter.slice(index, 1);
               }
            });
         else {
            const index = state.provinceFilter.indexOf(provinces);
            if (index !== -1) {
               state.provinceFilter.slice(index, 1);
            }
         }
      },
      toggleFilter: (state, { payload: { province } }: PayloadToggleFilter) => {
         const index = state.provinceFilter.indexOf(province);
         if (index === -1) {
            state.provinceFilter.push(province);
         } else {
            state.provinceFilter.splice(index, 1);
         }
      },
   },
   extraReducers: {
      [HYDRATE]: (state, action) => {
         return {
            ...state,
            ...action.payload.provinceFilter,
         };
      }
   },
});

export const provinceFilterActions = ProvinceFilterSlice.actions;
export const provinceFilterReducer = ProvinceFilterSlice.reducer;
