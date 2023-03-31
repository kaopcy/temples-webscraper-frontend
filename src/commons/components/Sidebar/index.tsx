/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { provinceTranslator } from '@/utils/getTranslateProvince';
/** hooks */
import { ProvinceEnum } from '@/types/filter.type';
import { IProvince, ITemple } from '@/types/temple.type';

import SidebarCSVFile from './SidebarCSVFile';
/** components */
import SidebarLoading from './SidebarLoading';
import SidebarSourceCode from './SidebarSourceCode';
import SidebarTempleLink from './SidebarTempleLink';

const Sidebar: React.FC = () => {
   const [provinces, setTemples] = useState<IProvince[] | null>(null);

   useEffect(() => {
      const fetch = async () => {
         const { data } = await axios.get<IProvince[]>(
            `${process.env.REACT_APP_BACKEND_URL}/province`,
         );
         setTemples(data);
      };
      fetch();
   }, []);

   return (
      <nav className="sticky top-[50px] hidden h-[calc(100vh-70px)]  w-[200px] shrink-0 flex-col  items-start md:flex ">
         <div className="flex w-full flex-col gap-y-2">
            <SidebarSourceCode />
            <SidebarCSVFile />
         </div>
         <span className="my-8 w-full border-b" />
         {!provinces ? (
            <SidebarLoading />
         ) : (
            <div className="flex h-full w-full flex-col items-start gap-y-2 overflow-y-scroll">
               {provinces.map((province) => (
                  <div key={province._id} className="flex flex-col items-start gap-y-1">
                     <b className="mb-2 text-text">
                        {provinceTranslator(province.name as ProvinceEnum)}
                     </b>
                     {province.temples?.map((temple: ITemple) => (
                        <SidebarTempleLink key={temple._id} temple={temple} />
                     ))}
                     <div className="mt-2 mb-6 h-[1px] w-full bg-text-lighter" />
                  </div>
               ))}
            </div>
         )}
      </nav>
   );
};
export default Sidebar;
