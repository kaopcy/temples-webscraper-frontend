import { Icon } from '@iconify/react';
import type { DetailedHTMLProps, ImgHTMLAttributes } from 'react';
import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';

// utils
import { classname } from '../utils/getClassname';

interface IProps {
   isLazy: boolean;
   alt: string;
   src: string;
   overlayRender?: ({
      isLoaded,
   }: {
      isLoaded: boolean;
   }) => React.ReactNode | React.ReactNode | null;
}

const Image: React.FC<
   DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & IProps
> = ({ alt, overlayRender, isLazy, ...rests }) => {
   const overlay =
      overlayRender && typeof overlayRender === 'function'
         ? overlayRender({ isLoaded: true })
         : overlayRender;

   return isLazy ? (
      <LazyLoad
         placeholder={
            <div className="flex h-full w-full items-center justify-center bg-gray-300">
               <Icon className="h-10 w-10 animate-spin" icon="mingcute:loading-3-line" />
            </div>
         }
         className={classname('relative', rests.className ?? '')}
      >
         {overlay}
         <>
            <img
               {...rests}
               src={rests.src}
               className={classname('object-cover ', rests.className ?? '')}
               alt={alt}
            />
         </>
      </LazyLoad>
   ) : (
      <div className={classname('relative', rests.className ?? '')}>
         {overlay}
         <>
            <img
               {...rests}
               src={rests.src}
               className={classname('object-cover ', rests.className ?? '')}
               alt={alt}
            />
         </>
      </div>
   );
};

Image.defaultProps = {
   overlayRender: undefined,
};

export default Image;
