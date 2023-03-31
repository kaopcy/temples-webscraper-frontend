// icons
import { Icon } from '@iconify/react';
import { AnimatePresence } from 'framer-motion';
import React, { useRef } from 'react';
// hooks
import { useEffectOnce } from 'react-use';

import { useSearchBar } from '@/modules/Temples/hooks/useSearchBar';

// stores
// sections
import SearchBarDropdown, { IDropdownImperative } from './SearchBarDropdown';
import { useRouter } from 'next/router';

const SearchBar: React.FC = () => {
   const { onChange, searchQuery, isLoading, clearSearchQuery } = useSearchBar();
   const { query } = useRouter();
   const inputRef = useRef<HTMLInputElement>(null);
   const dropdownRef = useRef<IDropdownImperative>(null);

   const closeDropDown = () => {
      dropdownRef.current?.close();
      inputRef.current?.blur();
   };

   const onClearInputClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      e.preventDefault();
      clearSearchQuery();
      closeDropDown();
      if (inputRef.current) inputRef.current.value = '';
   };

   return (
      <div className="relative mx-auto mb-6 flex w-[100%] items-center rounded-md border-2 border-gray-400/30  bg-white  py-3 px-3 text-center  text-lg text-text md:w-full ">
         <div className="relative mt-1 flex w-full items-center">
            <input
               defaultValue={query.search}
               ref={inputRef}
               onFocus={() => dropdownRef.current?.open()}
               className="w-full"
               onChange={onChange}
               type="text"
               placeholder="ค้นหาชื่อวัด"
            />
            {searchQuery.length > 0 && (
               <button type="button" onClick={onClearInputClick}>
                  <Icon className="mr-3 h-5 w-5 text-text-light" icon="ep:circle-close-filled" />
               </button>
            )}
            <Icon
               className={`mr-3 h-6 w-6 ${isLoading ? 'animate-spin' : 'animate-none'}`}
               icon={isLoading ? 'mingcute:loading-3-line' : 'isLoading'}
            />
         </div>
         {/* <AnimatePresence>
            <SearchBarDropdown ref={dropdownRef} />
         </AnimatePresence> */}
      </div>
   );
};

export default SearchBar;
