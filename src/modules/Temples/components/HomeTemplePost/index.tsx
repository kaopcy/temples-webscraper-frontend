import { motion } from 'framer-motion';
import NextImage from 'next/image';
import React, { Suspense } from 'react';

// components
import Image from '@/components/Image';
// types
import * as types from '@/types/temple.type';

// sections
import HomeTemplePostDetail from './HomeTemplePostDetail';

interface IProps {
   temple: types.ITemple;
}

const HomeTemplePost: React.FC<IProps> = ({ temple }) => {
   return (
      <article className="flex w-full max-w-[800px] flex-col gap-x-6 self-center  border-b last:border-none  pb-10 md:h-[340px]  md:flex-row">
         <div className="relative hidden aspect-[11/8]  md:block md:aspect-[8/11]  md:h-full">
            <NextImage
               fill
               sizes="40vw"
               className="h-full w-full object-cover"
               placeholder="blur"
               blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGN49HjR84fn/v/5+//JBQZbBx4GFgZGLg4JNgYGJzPNQB+/UH+/4pQkAH9UDx625/SCAAAAAElFTkSuQmCC"
               alt={temple.name}
               src={temple.images?.[0]?.url ?? ''}
            />
         </div>
         <HomeTemplePostDetail temple={temple} />
      </article>
   );
};

export default HomeTemplePost;
