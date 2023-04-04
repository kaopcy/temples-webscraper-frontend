import { Icon } from '@iconify/react';
import React from 'react';
// import TripTagsGroup from '@/sections/trip/TripTagsGroup';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import Image from '@/components/Image';
/** components */
import LinkNewTab from '@/components/LinkNewTab';
import { provinceTranslator } from '@/utils/getTranslateProvince';
/** hooks */
/** sections */
import ImagesGallery from '@/modules/Temple/components/ImagesGallery';
import { InferGetServerSidePropsType } from 'next';

import Layout from '@/components/layout';
import { useRouter } from 'next/router';
import { getServerSideProps } from './ssr';

const Temple: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ temple }) => {
   const { back } = useRouter();

   return (
      <Layout pageKey={temple.name}>
         <main className="flex w-full flex-col  items-center bg-white pt-20 pb-56">
            <div className="relative flex w-full max-w-[1000px] flex-col  items-center px-4 sm:px-10">
               <button
                  type="button"
                  onClick={() => back()}
                  className="absolute  right-2 -top-10 md:right-8  md:top-2 "
               >
                  <Icon className="h-8 w-8 text-gray-300" icon="eva:close-fill" />
               </button>
               <h1 className=" mb-2 self-start text-4xl font-bold">{temple?.name}</h1>
               <div className="mb-10 flex items-center gap-x-1 self-start">
                  <Icon className="h-4 w-4 text-red-500" icon="material-symbols:location-on" />
                  <span className="text-base text-text-light">จังหวัดแม่ฮ่องสอน</span>
               </div>
               {/* <div className="flex items-center">
                  <span>{temple?.provinceName}</span>
               </div> */}
               {/* <TripTagsGroup /> */}
               <ImagesGallery temple={temple} />
               {temple?.detail?.includes('detail') ? (
                  <p className=" mt-10 mb-60 self-start break-all text-lg leading-8 tracking-wide text-text/70">
                     <b className="mr-1 text-base font-bold text-text">{temple?.name}</b>
                     เป็นวัดใน{provinceTranslator(
                        temple?.provinceName,
                     )} อ่านข้อมูลเพิ่มเติมได้ที่{' '}
                     <LinkNewTab href={temple?.link} className="text-blue-500 underline">
                        {decodeURI(temple?.link)}
                     </LinkNewTab>
                  </p>
               ) : (
                  <>
                     <p
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: temple?.detail ?? '' }}
                        className=" mt-10 self-start text-lg leading-8 tracking-wide text-text/70"
                     />
                     <LinkNewTab className="mt-20 mb-60 self-end" href={temple?.link}>
                        <span className="text-sky-500 hover:underline">
                           {temple?.link && decodeURI(temple.link)}
                        </span>
                     </LinkNewTab>
                  </>
               )}
               {temple && (
                  <div className="h-[2000px] w-full overflow-hidden">
                     <ResponsiveMasonry
                        className="w-full gap-3"
                        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                     >
                        <Masonry>
                           {temple?.images?.map(
                              (image) =>
                                 image?.url && (
                                    <TempleImage
                                       key={image.url}
                                       src={image?.url}
                                       imgSrc={image.src}
                                    />
                                 ),
                           )}
                        </Masonry>
                     </ResponsiveMasonry>
                  </div>
               )}
            </div>
         </main>
      </Layout>
   );
};

const TempleImage: React.FC<{ src: string; imgSrc: string }> = ({ src, imgSrc }) => {
   return (
      <div className="group relative flex flex-col items-start overflow-hidden p-2">
         <div className="relative h-full w-full overflow-hidden">
            <Image className="z-0 w-full object-cover" isLazy={false} alt="" src={src} />
            <div className="absolute top-0 left-0 z-10 flex h-full w-full  translate-y-full flex-col bg-gradient-to-t  from-[#11111199] opacity-0 transition-all duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100">
               <LinkNewTab href={imgSrc} className="mt-auto break-all p-2 text-sm text-white">
                  {imgSrc}
               </LinkNewTab>
            </div>
         </div>
      </div>
   );
};

export default Temple;
