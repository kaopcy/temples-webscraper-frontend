import { ProvinceEnum } from '@/types/filter.type';
import { provinceTranslator } from '@/utils/getTranslateProvince';
import { Router } from 'next/router';

const TempleBackgroundText: React.FC<{ router: Router }> = ({ router }) => {
   const { filter, search } = router.query;
   const filterQuery = Array.isArray(filter)
      ? filter.map((e) => provinceTranslator(e as ProvinceEnum)).join(', ')
      : provinceTranslator(filter as ProvinceEnum) ?? '';

   const renderKeyword = () =>
      router.query.search &&
      router.query.search.length > 0 && (
         <div className=" mr-4 text-2xl font-bold text-stone-200">
            คีย์เวิร์ด "{router.query.search ?? ''}"
         </div>
      );

   const renderFilter = () =>
      router.query.filter && (
         <div className=" my-4 mr-4 w-full max-w-[500px] text-center text-xl font-bold text-stone-100">
            จังหวัด{filterQuery}
         </div>
      );

   return (
      <div className=" mb-10 flex w-full flex-col items-center ">
         <h1 className="my-10  w-full text-center text-4xl tracking-wider text-stone-50 sm:text-7xl">
            {router.query.temple}
         </h1>
      </div>
   );
};

export default TempleBackgroundText;
