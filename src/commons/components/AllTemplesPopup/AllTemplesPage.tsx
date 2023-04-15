import { motion } from 'framer-motion';

import { url } from '@/configs/apiUrl';
import { ProvinceEnum } from '@/types/filter.type';
import { IProvince, ITemple } from '@/types/temple.type';
import { provinceTranslator } from '@/utils/getTranslateProvince';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const AllTemplesPage = ({ close }: { close: () => void }) => {
   const [provinces, setTemples] = useState<IProvince[] | null>(null);

   useEffect(() => {
      const fetch = async () => {
         const { data } = await url.getAllTemples();
         setTemples(data);
      };
      fetch();
   }, []);

   return (
      <div className="relative mt-[80px] flex w-full max-w-[800px]  flex-col flex-wrap items-start justify-between px-4 pb-20 text-white md:mt-[65px]">
         <button
            type="button"
            onClick={() => close()}
            className="absolute  right-2 md:right-4  aspect-square rounded-full transition-all ease-in-out hover:scale-125 hover:bg-[#d1d5db18] md:top-0"
         >
            <Icon className="sticky top-20 h-8 w-8 text-gray-300" icon="eva:close-fill" />
         </button>
         {provinces ? (
            provinces.map((province) => (
               <div className="mb-20 flex w-full flex-col">
                  <div className="mb-5 text-2xl font-bold text-text tracking-wider">
                     จังหวัด{province.name && provinceTranslator(province.name as ProvinceEnum)}
                  </div>
                  <div
                     key={province._id}
                     className="flex w-full flex-grow flex-row flex-wrap items-start justify-start gap-x-4 gap-y-3"
                  >
                     {province.temples.sort()?.map((temple: ITemple) => (
                        <motion.span
                           key={temple._id}
                           className="flex flex-grow items-center text-base odd:text-neutral-600 even:text-neutral-400 hover:underline underline-offset-2"
                        >
                           <Link href={`/temple/${temple.name}`} >{temple.name}</Link>
                        </motion.span>
                     ))}
                  </div>
               </div>
            ))
         ) : (
            <div className="mx-auto flex w-full items-center gap-x-4 h-full  justify-center">
               <h1 className="">กำลังโหลด</h1>
               <Icon icon="mingcute:loading-3-line" className="h-8 w-8 animate-spin" />
            </div>
         )}
      </div>
   );
};

export default AllTemplesPage;
