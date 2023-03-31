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

const Temples: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
   temples,
   options,
   page,
}) => {
   const [hovering, setHovering] = useState<boolean>(false);
   const { isFallback } = useRouter();

   useEffect(() => {
      console.log('isFallback: ', isFallback);
   }, [isFallback]);

   return (
      <Layout pageKey={page}>
         <div className="flex h-full w-full flex-col items-center px-3 pt-20 md:px-0">
            <motion.div
               className="pointer-events-none fixed inset-0 h-full w-full bg-black"
               initial={{ opacity: 0, zIndex: 2 }}
               animate={{ opacity: hovering ? 0.8 : 0, pointerEvents: hovering ? 'auto' : 'none' }}
               transition={{ duration: 0.15 }}
               onMouseDown={() => {
                  setHovering(false);
               }}
            />

            <motion.div
               initial={{ y: -100, opacity: 0 }}
               animate={{ y: 0, x: 0, opacity: 1 }}
               transition={{
                  delay: 0.5,
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  duration: 3,
               }}
               className=""
            >
               <h1 className="my-10 whitespace-nowrap text-6xl tracking-wider sm:text-[80px]">
                  วัดไทย.
               </h1>
            </motion.div>
            <Popout
               className="rounded-lg  bg-white px-2 pt-10  sm:px-10 md:px-10"
               hovering={hovering}
               setHovering={setHovering}
            >
               <SearchBar />
               <HomeProvinceFilter />
            </Popout>

            <HomeSearchResult />

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
