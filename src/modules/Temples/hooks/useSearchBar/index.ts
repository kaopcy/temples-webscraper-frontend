import axios from 'axios';
import { useCallback } from 'react';
import { useUpdateEffect } from 'react-use';

import { SearchResultsType, templeSearchActions } from '@/modules/Temples/redux/templeSearch';
import { useDispatch, useSelector } from '@/redux/store';

import useDelayOnChange from '@/hooks/useDelayOnChange';
import { useRouter } from 'next/router';

interface HookReturnType {
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
   updateSearchQuery: (newSearchQuery: string) => void;
   clearSearchQuery: () => void;
   searchQuery: string;
   searchResults: SearchResultsType;
   error: string | null | undefined;
   isLoading: boolean;
}

export const useSearchBar = (): HookReturnType => {
   const templeSearchState = useSelector((state) => state.templeSearch);

   const dispatch = useDispatch();

   const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      updateSearchQuery(e.target.value);
   };

   const clearSearchQuery = () => {
      dispatch(templeSearchActions.deleteSearchQuery());
   };

   const updateSearchQuery = useCallback(
      (newSearchQuery: string) => {
         dispatch(templeSearchActions.updateSearchQuery({ updatedSearchQuery: newSearchQuery }));
      },
      [dispatch],
   );

   return {
      ...templeSearchState,
      onChange,
      clearSearchQuery,
      updateSearchQuery,
      isLoading: templeSearchState.isLoading,
   };
};
