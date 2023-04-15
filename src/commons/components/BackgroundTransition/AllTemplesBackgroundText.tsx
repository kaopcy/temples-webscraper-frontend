import { ProvinceEnum } from '@/types/filter.type';
import { provinceTranslator } from '@/utils/getTranslateProvince';
import { Router } from 'next/router';

const AllTemplesBackgroundText: React.FC<{ router: Router }> = ({ router }) => {

   return (
      <div className=" mb-10 flex w-full flex-col items-center">
         <h1 className="my-10 whitespace-nowrap text-6xl tracking-wider text-stone-50 sm:text-7xl">
            วัดไทย.
         </h1>
         <div className=" mr-4 mt-5 text-base text-stone-300 md:mt-10  md:text-lg">
            รายชื่อวัดทั้งหมด
         </div>
      </div>
   );
};

export default AllTemplesBackgroundText;
