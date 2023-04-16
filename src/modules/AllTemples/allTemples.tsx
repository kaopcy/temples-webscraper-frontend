import { motion } from 'framer-motion';

import { url } from '@/configs/apiUrl';
import { ProvinceEnum } from '@/types/filter.type';
import { IProvince, ITemple } from '@/types/temple.type';
import { provinceTranslator } from '@/utils/getTranslateProvince';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import { getStaticProps } from './ssr';
import { useRouter } from 'next/router';
import Layout from '@/components/layout';

const AllTemples: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ provinces }) => {
   const { back } = useRouter();

   return (
      <Layout pageKey={provinces[0].name}>
         <div className="flex w-full flex-col items-center">
            <div className="relative  mt-20 flex w-full  max-w-[800px] flex-col flex-wrap  items-center px-4 pb-20">
               <button
                  type="button"
                  onClick={() => back()}
                  className="absolute  right-2 aspect-square  rounded-full transition-all ease-in-out hover:scale-125 hover:bg-[#d1d5db18] md:right-4 md:top-0"
               >
                  <Icon className="sticky top-20 h-8 w-8 text-gray-300" icon="eva:close-fill" />
               </button>
               {provinces.map((province) => (
                  <div className="mb-20 flex w-full flex-col">
                     <div className="mb-5 flex items-center gap-x-4 ">
                        <div className=" text-2xl font-bold tracking-wider text-text">
                           จังหวัด
                           {province.name && provinceTranslator(province.name as ProvinceEnum)}
                        </div>
                        <div className="h-1 w-1 self-center rounded-full bg-text-lighter"></div>
                        <div className=" text-lg   text-text-light ">
                           <span className="text-base">{province.temples.length}</span> จังหวัด
                        </div>
                     </div>
                     <div
                        key={province._id}
                        className="flex w-full flex-grow flex-row flex-wrap items-start justify-start gap-x-2 gap-y-3 md:gap-x-4"
                     >
                        {province.temples.sort()?.map((temple: ITemple) => (
                           <motion.span
                              key={temple.name}
                              className="flex flex-grow items-center text-base underline-offset-2 odd:text-neutral-600 even:text-neutral-400 hover:underline"
                           >
                              <Link href={`/temple/${temple.name}`}>{temple.name}</Link>
                           </motion.span>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </Layout>
   );
};

export default AllTemples;
