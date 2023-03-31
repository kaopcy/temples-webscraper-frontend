import React from 'react';

// components
import LinkNewTab from '@/components/LinkNewTab';
import NextImage from 'next/image';
import { ITemple } from '@/types/temple.type';

const ImagesGallery: React.FC<{ temple: ITemple }> = ({ temple }) => {
   return (
      temple && (
         <section className="flex  h-[calc(40vh-64px)] w-full max-w-[1000px] gap-x-2 overflow-hidden rounded-xl sm:h-[calc(60vh-64px)]">
            {temple.images?.[0] && (
               <div className="h-full w-1/2 shrink-0">
                  <LinkNewTab className="relative h-full w-full" href={temple.images[0].url}>
                     <div className="relative h-full w-full">
                        <NextImage
                           placeholder="blur"
                           blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNonjL9/8cLFQ1hDEIMDNUtZf/Pze5tymFQ42OIaXVfeq68ZXamlJYQAF7zEEvyRKRvAAAAAElFTkSuQmCC"
                           fill
                           sizes="25vw"
                           className="h-full w-full object-cover"
                           alt={temple.name}
                           src={temple.images[0].url}
                        />
                     </div>
                  </LinkNewTab>
               </div>
            )}

            <div className="flex h-full w-full flex-col gap-y-2">
               {temple.images?.[1] && (
                  <div className="h-1/2 w-full ">
                     <LinkNewTab className="relative  h-full w-full" href={temple.images[1].url}>
                        <div className="relative h-full w-full">
                           <NextImage
                              placeholder="blur"
                              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNonjL9/8cLFQ1hDEIMDNUtZf/Pze5tymFQ42OIaXVfeq68ZXamlJYQAF7zEEvyRKRvAAAAAElFTkSuQmCC"
                              fill
                              sizes="25vw"
                              alt={temple.name}
                              className="h-full w-full object-cover"
                              src={temple.images[1].url}
                           />
                        </div>
                     </LinkNewTab>
                  </div>
               )}

               <div className="flex h-1/2 w-full gap-x-2">
                  {temple.images?.[2] && (
                     <LinkNewTab className="relative h-full w-full " href={temple.images[2].url}>
                        <div className="relative h-full w-full">
                           <NextImage
                              placeholder="blur"
                              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNonjL9/8cLFQ1hDEIMDNUtZf/Pze5tymFQ42OIaXVfeq68ZXamlJYQAF7zEEvyRKRvAAAAAElFTkSuQmCC"
                              fill
                              sizes="25vw"
                              alt={temple.name}
                              className="h-full w-full object-cover"
                              src={temple.images[2].url}
                           />
                        </div>
                     </LinkNewTab>
                  )}
                  {temple.images?.[3] && (
                     <LinkNewTab
                        className="relative hidden h-full w-full sm:block"
                        href={temple.images[3].url}
                     >
                        <NextImage
                           placeholder="blur"
                           alt={temple.name}
                           blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNonjL9/8cLFQ1hDEIMDNUtZf/Pze5tymFQ42OIaXVfeq68ZXamlJYQAF7zEEvyRKRvAAAAAElFTkSuQmCC"
                           fill
                           sizes="25vw"
                           className="h-full w-full object-cover"
                           src={temple.images[3].url}
                        />
                     </LinkNewTab>
                  )}
               </div>
            </div>
         </section>
      )
   );
};

export default ImagesGallery;
