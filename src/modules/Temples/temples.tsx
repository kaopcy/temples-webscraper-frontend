import { motion } from 'framer-motion';
import { InferGetServerSidePropsType } from 'next';
import { useEffect, useState } from 'react';

import Layout from '@/components/layout';
import Pagination from '@/components/Pagination';
import Popout from '@/modules/Temples/components/Popout';

import { useRouter } from 'next/router';
import HomeProvinceFilter from './components/HomeProvinceFilter';
import HomeTemplePost from './components/HomeTemplePost';
import SearchBar from './components/SearchBar';
import { getServerSideProps } from './ssr';
import HomeSearchResult from './components/HomeSearchResult';
import HomeSearchFilterPopout from './components/HomeSearchFilterPopout';

const Temples: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
   temples,
   options,
   page,
   search,
}) => {
   // const [hovering, setHovering] = useState<boolean>(false);

   return (
      <Layout pageKey={page}>
         <div className="flex h-full w-full flex-col items-center px-3 pt-20 md:px-0 ">
            {/* <motion.div
               className="pointer-events-none fixed  inset-0 h-full w-full bg-black"
               initial={{ opacity: 0, zIndex: 2 }}
               animate={{ opacity: hovering ? 0.8 : 0, pointerEvents: hovering ? 'auto' : 'none' }}
               transition={{ duration: 0.15 }}
               onMouseDown={() => {
                  setHovering(false);
               }}
            /> */}

            <h1 className="my-10 whitespace-nowrap text-6xl tracking-wider sm:text-[80px]">
               วัดไทย.
            </h1>
            {/* <Popout className="" hovering={hovering} setHovering={setHovering}>
               <SearchBar />
               <HomeProvinceFilter />
            </Popout> */}

            <HomeSearchFilterPopout>
               <SearchBar />
               <HomeProvinceFilter />
            </HomeSearchFilterPopout>

            <HomeSearchResult search={search} />

            <Pagination curPage={parseInt(page)} totalPages={options.totalPages} />
            <div className="mx-auto flex w-full max-w-[1000px] items-start justify-center  gap-x-14">
               <div className="mx-auto flex min-h-screen w-full flex-col gap-y-10 px-3 ">
                  {temples.map((temple) => (
                     <HomeTemplePost key={temple._id} temple={temple} />
                  ))}
               </div>
            </div>
            <Pagination curPage={parseInt(page)} totalPages={options.totalPages} />
            <div className=""></div>
         </div>
      </Layout>
   );
};

export default Temples;
