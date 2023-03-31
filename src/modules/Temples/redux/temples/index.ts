import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITemple } from '@/types/temple.type';
import { HYDRATE } from 'next-redux-wrapper';

export interface ITemplesState {
   temples: ITemple[] | null;
   isLoading: boolean;
   error: string | null;
   currentPage: number;
   nextPage: number | null;
   totalTemples: number | null;
   totalPages: number | null;
}

const initialState: ITemplesState = {
   temples: [],
   isLoading: false,
   error: null,
   currentPage: 1,
   nextPage: null,
   totalTemples: null,
   totalPages: null,
};

type PayloadFetchFailed = PayloadAction<{ error: string }>;
type PayloadFetchSuccess = PayloadAction<{
   temples: ITemple[];
   currentPage: number;
   nextPage: number;
   totalTemples: number;
   totalPages: number;
}>;

const TemplesSlice = createSlice({
   name: 'temples',
   initialState,
   reducers: {
      initTemples: (
         state,
         {
            payload: { currentPage, temples, nextPage, totalTemples, totalPages },
         }: PayloadFetchSuccess,
      ) => {
         state.nextPage = nextPage;
         state.totalTemples = totalTemples;
         state.currentPage = currentPage;
         state.temples = temples;
         state.totalPages = totalPages;
      },
      startFetchTemples: (state) => {
         state.isLoading = true;
      },
      fetchTemplesSuccess: (
         state,
         {
            payload: { currentPage, temples, nextPage, totalTemples, totalPages },
         }: PayloadFetchSuccess,
      ) => {
         state.nextPage = nextPage;
         state.totalTemples = totalTemples;
         state.currentPage = currentPage;
         state.temples = temples;
         state.isLoading = false;
         state.totalPages = totalPages;
         state.error = null;
      },
      fetchNextTemplesSuccess: (
         state,
         {
            payload: { currentPage, temples, nextPage, totalTemples, totalPages },
         }: PayloadFetchSuccess,
      ) => {
         state.totalPages = totalPages;
         state.nextPage = nextPage;
         state.totalTemples = totalTemples;
         state.currentPage = currentPage;
         state.temples?.push(...temples);
         state.isLoading = false;
         state.error = null;
      },
      emptyFetch: (state) => {
         state.nextPage = null;
         state.currentPage = 1;
         state.totalTemples = null;
         state.totalTemples = 0;
      },
      fetchTemplesFailed: (state, { payload: { error } }: PayloadFetchFailed) => {
         state.isLoading = false;
         state.error = error;
      },
   },
   extraReducers: {
      [HYDRATE]: (state, action)=> {
         return {
            ...state,
            ...action.payload.temples
         }
      }
   }
});

export const templesAction = TemplesSlice.actions;

export const templesReducer = TemplesSlice.reducer;
