import { InferGetServerSidePropsType } from 'next';

import Layout from '@/components/layout';
import Pagination from '@/components/Pagination';

import HomeProvinceFilter from './components/HomeProvinceFilter';
import HomeSearchFilterPopout from './components/HomeSearchFilterPopout';
import HomeSearchResult from './components/HomeSearchResult';
import HomeTemplePost from './components/HomeTemplePost';
import SearchBar from './components/SearchBar';
import { getServerSideProps } from './ssr';

const Temples: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
   temples,
   options,
   page,
   search,
}) => {
   return (
      <Layout pageKey={page}>
         <div className="flex h-full w-full flex-col items-center px-3 pt-20 md:px-0 ">
            <h1 className="my-10 whitespace-nowrap text-6xl tracking-wider sm:text-[80px]">
               วัดไทย.
            </h1>
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
