import React, { useState } from 'react';

import { provinceTranslator } from '@/utils/getTranslateProvince';
// hooks
import { ITemple } from '@/types/temple.type';
// utils
import ReactHtmlParser from 'react-html-parser';
import { useEffectOnce } from 'react-use';

const HomeMaxHeightOverlayText: React.FC<{
   temple: ITemple;
}> = ({ temple }) => {
   const [htmlDetailString, setHtmlDetailString] = useState<string>('');
   useEffectOnce(() => {
      setHtmlDetailString(temple.detail);
   });

   return (
      <div className="relative  mb-auto h-[130px]  overflow-hidden">
         {temple.detail?.includes('detail') ? (
            <p className="break-all">
               <b className="mr-1 text-base font-bold text-text">{temple?.name}</b>
               เป็นวัดใน{provinceTranslator(temple?.provinceName)} อ่านข้อมูลเพิ่มเติมได้ที่{' '}
               <span className="text-blue-500 underline">{decodeURI(temple?.link)}</span>
            </p>
         ) : (
            <div className="  text-base font-normal  text-text">
               {ReactHtmlParser(htmlDetailString)}
            </div>
         )}

         <div className="absolute bottom-0 left-0 flex h-14 w-full flex-col">
            <div className="from  h-14 w-full bg-gradient-to-t from-white " />
            <div className="from absolute bottom-0 left-0  h-14 w-full bg-gradient-to-t from-white " />
         </div>
      </div>
   );
};

export default HomeMaxHeightOverlayText