import { motion } from 'framer-motion';
import { forwardRef, useImperativeHandle, useState } from 'react';

// hooks
import { useSearchBar } from '@/modules/Temples/hooks/useSearchBar';

export interface IDropdownImperative {
   close: () => void;
   open: () => void;
   toggle: () => void;
}

const SearchBarDropdown = forwardRef<IDropdownImperative>((_, dropDownRef) => {
   const [open, setOpen] = useState(false);

   useImperativeHandle(
      dropDownRef,
      (): IDropdownImperative => ({
         close: () => {
            setOpen(false);
         },
         open: () => {
            setOpen(true);
         },
         toggle: ()=> {
            setOpen(e => !e);
         }
      }),
   );

   const { updateSearchQuery } = useSearchBar();

   const { searchResults, searchQuery } = useSearchBar();

   return open ? (
      <motion.section
         initial={{ y: -50 }}
         animate={{ y: 0 }}
         exit={{ y: -50 }}
         className="absolute  top-[110%] left-0 z-dropdown mt-1  w-full rounded-md bg-white py-1  shadow-lg ring-1 ring-black ring-opacity-5 "
      >
         <div className="flex h-full  max-h-60 w-full flex-col items-start overflow-y-scroll  text-base">
            {searchResults?.map((searchResult) => (
               <button
                  onClick={() => updateSearchQuery(searchResult.name)}
                  type="button"
                  className="w-full  py-1 px-4 text-left hover:bg-gray-100 "
                  key={searchResult._id}
               >
                  <span>{searchResult.name}</span>
               </button>
            ))}
         </div>
         <div className="px-4 py-1 text-left text-text-light">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            ค้นหาด้วยคีย์เวิร์ด "{searchQuery}"
         </div>
      </motion.section>
   ) : null;
});

export default SearchBarDropdown;
