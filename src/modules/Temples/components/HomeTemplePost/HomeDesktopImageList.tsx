import NextImage from 'next/image';
import React from 'react';

// hooks
import { ITemple } from '@/types/temple.type';
import { classname } from '@/utils/getClassname';
// utils

const HomeDesktopImageList: React.FC<{ temple: ITemple }> = ({ temple }) => {
   return (
      <div className="mt-auto hidden w-full gap-x-3 md:flex">
         {[...Array(3)].map((_, index) => (
            <div
               key={temple?.images?.[index + 1]?.url ?? `${index + 1}`}
               className="relative aspect-square w-full lg:aspect-[14/10]"
            >
               {temple?.images?.[index + 1]?.url && (
                  <>
                     <NextImage
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNonjL9/8cLFQ1hDEIMDNUtZf/Pze5tymFQ42OIaXVfeq68ZXamlJYQAF7zEEvyRKRvAAAAAElFTkSuQmCC"
                        fill
                        sizes="25vw"
                        className="h-full w-full object-cover"
                        alt={`${temple.name}-${index}-${'awdaw'}`}
                        src={temple?.images?.[index + 1]?.url ?? 'rrr'}
                     />
                     {index === 2 && (
                        <div
                           className={classname(
                              'absolute z-10 flex h-full w-full cursor-pointer items-center justify-center  bg-black/60 text-white transition-all duration-500',
                           )}
                        >
                           + {temple?.imagesCount ? temple?.imagesCount - 4 : 14} รูป
                        </div>
                     )}
                  </>
               )}
            </div>
         ))}
      </div>
   );
};

export default HomeDesktopImageList;
