import { ProvinceEnum } from '@/types/filter.type';
import { provinceTranslator } from '@/utils/getTranslateProvince';
import { Router } from 'next/router';

const TemplesBackgroundText: React.FC<{ router: Router }> = ({ router }) => {
   const { filter, search } = router.query;
   const filterQuery = Array.isArray(filter)
      ? filter.map((e) => provinceTranslator(e as ProvinceEnum)).join(', ')
      : provinceTranslator(filter as ProvinceEnum) ?? '';

   const renderKeyword = () =>
      router.query.search &&
      router.query.search.length > 0 && (
         <div className=" mr-4 text-xl font-bold text-stone-200 md:text-2xl">
            คีย์เวิร์ด "{router.query.search ?? ''}"
         </div>
      );

   const renderFilter = () =>
      router.query.filter && (
         <div className=" my-4 mr-4 w-full max-w-[500px] text-center text-lg font-bold text-stone-100 md:text-xl">
            จังหวัด{filterQuery}
         </div>
      );

   return (
      <div className=" mb-10 flex flex-col items-center w-full">
         <h1 className="my-10 whitespace-nowrap text-6xl tracking-wider text-stone-50 sm:text-7xl">
            วัดไทย.
         </h1>
         {renderKeyword()}
         {renderFilter()}
         <div className=" mr-4 mt-5 text-base text-stone-300 md:mt-10  md:text-lg">
            หน้าที่ {router.query.page}
         </div>
      </div>
   );
};

export default TemplesBackgroundText;
