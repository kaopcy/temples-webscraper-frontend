import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

interface ISearchQuery {
   name: string;
   _id: string;
}

export type SearchResultsType = ISearchQuery[] | null | undefined | never[];

interface ITempleSearchState {
   searchQuery: string;
   searchResults: SearchResultsType;
   isLoading: boolean;
   error: string | null;
}

const initialState: ITempleSearchState = {
   searchQuery: '',
   searchResults: null,
   isLoading: false,
   error: null,
};

type InitPayloadType = PayloadAction<{ initSearchQuery: string }>;
type UpdatePayloadType = PayloadAction<{ updatedSearchQuery: string }>;
type FetchSuccessPayloadType = PayloadAction<{ searchResults: SearchResultsType }>;
type FetchErrorPayloadType = PayloadAction<{ error: string }>;

const TempleSearchSlice = createSlice({
   name: 'templeSearch',
   initialState,
   reducers: {
      initSearchQuery: (state, { payload: { initSearchQuery } }: InitPayloadType) => {
         state.searchQuery = initSearchQuery;
      },
      updateSearchQuery: (state, { payload: { updatedSearchQuery } }: UpdatePayloadType) => {
         state.searchQuery = updatedSearchQuery;
      },
      deleteSearchQuery: (state) => {
         state.searchQuery = '';
      },
      startFetchSearchQuery: (state) => {
         state.isLoading = true;
      },
      fetchSearchQuerySuccess: (state, { payload: { searchResults } }: FetchSuccessPayloadType) => {
         state.searchResults = searchResults;
         state.isLoading = false;
      },
      fetchSearchQuertFailed: (state, { payload: { error } }: FetchErrorPayloadType) => {
         state.error = error;
         state.isLoading = false;
      },
   },
   extraReducers: {
      [HYDRATE]: (state, action) => {
         return {
            ...state,
            ...action.payload.templeSearch,
         };
      },
   },
});

export const templeSearchActions = TempleSearchSlice.actions;
export const templeSearchReducer = TempleSearchSlice.reducer;
