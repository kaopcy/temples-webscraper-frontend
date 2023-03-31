import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITemple } from '@/types/temple.type';

export interface ITempleState {
   temple: ITemple | undefined | null;
   isLoading: boolean;
   error: string | null;
}

const initialState: ITempleState = {
   temple: null,
   error: null,
   isLoading: false,
};

const TempleSlice = createSlice({
   name: 'temple',
   initialState,
   reducers: {
      startFetchTemple: (state) => {
         state.isLoading = true;
      },
      fetchTempleSuccess: (state, { payload: { temple } }: PayloadAction<{ temple: ITemple }>) => {
         state.temple = temple;
         state.isLoading = false;
      },

      fetchTempleFailed: (state, { payload: { error } }: PayloadAction<{ error: string }>) => {
         state.isLoading = false;
         state.error = error;
      },
   },
});

export const templeAction = TempleSlice.actions;
export const templeReducer = TempleSlice.reducer;
