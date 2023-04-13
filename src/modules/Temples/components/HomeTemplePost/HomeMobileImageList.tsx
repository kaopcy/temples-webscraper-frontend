import NextImage from 'next/image';
import React from 'react';

// hooks
import { ITemple } from '@/types/temple.type';
// utils

const HomeMobileImageList: React.FC<{ temple: ITemple }> = ({ temple }) => {
   return (
      <div className="mt-auto mb-5   flex w-full gap-x-2 md:hidden">
         {[...Array(4)].map((_, index) => (
            <div
               key={temple?.images?.[index]?.url ?? `${index}`}
               className="relative aspect-square w-full  lg:aspect-[14/10]"
            >
               {temple?.images?.[index]?.url && (
                  <NextImage
                     placeholder="blur"
                     blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNonjL9/8cLFQ1hDEIMDNUtZf/Pze5tymFQ42OIaXVfeq68ZXamlJYQAF7zEEvyRKRvAAAAAElFTkSuQmCC"
                     fill
                     sizes="25vw"
                     className="h-full w-full object-cover"
                     alt={`${temple.name}-${index}`}
                     src={temple?.images?.[index]?.url ?? ''}
                  />
               )}
            </div>
         ))}
      </div>
   );
};

export default HomeMobileImageList;

