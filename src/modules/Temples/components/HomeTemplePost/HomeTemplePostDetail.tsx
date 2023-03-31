import { Icon } from '@iconify/react';
import NextImage from 'next/image';
import React, { useState } from 'react';

import { provinceTranslator } from '@/utils/getTranslateProvince';
// hooks
import { ITemple } from '@/types/temple.type';
// utils
import ReactHtmlParser from 'react-html-parser';
import { useEffectOnce } from 'react-use';
/** components */
import HomeMobileImageList from './HomeMobileImageList';
import HomeDesktopImageList from './HomeDesktopImageList';
import HomeMaxHeightOverlayText from './HomeMaxHeightOverlayText';
import Link from 'next/link';

interface IProps {
   temple: ITemple;
}

const HomeTemplePostDetail: React.FC<IProps> = ({ temple }) => {
   return (
      <Link href={`/temple/${temple.name}`} scroll={false} className="group h-full w-full">
         <section className="flex h-full w-full flex-col items-start ">
            <HomeMobileImageList temple={temple} />
            <div className="-mb-1 group-hover:underline md:mb-0">
               <h1>{temple.name}</h1>
            </div>
            <div className="mb-2 flex items-center gap-x-1">
               <Icon className="h-3 w-3 text-red-500" icon="material-symbols:location-on" />
               <span className="text-[13px] text-text-light">
                  {provinceTranslator(temple.provinceName)}
               </span>
            </div>
            <HomeMaxHeightOverlayText temple={temple} />

            <HomeDesktopImageList temple={temple} />
         </section>
      </Link>
   );
};

export default HomeTemplePostDetail;
