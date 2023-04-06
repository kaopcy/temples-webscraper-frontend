import { ProvinceEnum } from '@/types/filter.type';
import { IProvince, ITemple } from '@/types/temple.type';
import { provinceTranslator } from '@/utils/getTranslateProvince';
import { Icon } from '@iconify/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const AllTemplesPage = () => {
   const [provinces, setTemples] = useState<IProvince[] | null>(null);

   useEffect(() => {
      const fetch = async () => {
         const { data } = await axios.get<IProvince[]>(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/province`,
         );
         setTemples(data);
      };
      fetch();
   }, []);

   return (
      <div className="mt-[100px] flex w-full max-w-[800px] flex-wrap items-start justify-between px-4 pb-20 md:mt-[65px]">
         {provinces ? (
            provinces.map((province) => (
               <div key={province._id} className="flex flex-col items-start gap-y-3">
                  <b className="mb-2 text-text">
                     จังหวัด{provinceTranslator(province.name as ProvinceEnum)} (
                     {province.temples.length})
                  </b>
                  {province.temples
                     .sort((a, b) => b.name.length - a.name.length)
                     ?.map((temple: ITemple) => (
                        <span key={temple._id} className="flex items-center text-base text-text">
                           {temple.name}
                        </span>
                     ))}
               </div>
            ))
         ) : (
            <div className="flex items-center mx-auto gap-x-4">
               <h1 className="">กำลังโหลด</h1>
               <Icon icon="mingcute:loading-3-line" className="h-8 w-8 animate-spin" />
            </div>
         )}
      </div>
   );
};

export default AllTemplesPage;
