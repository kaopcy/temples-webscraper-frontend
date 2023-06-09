import { GetStaticProps, GetStaticPathsResult, GetStaticPaths } from 'next';

import { url } from '@/configs/apiUrl';
import { IProvince, ITemple } from '@/types/temple.type';

export const getStaticProps: GetStaticProps<{
   provinces: IProvince[];
}> = async () => {
   let templeResult: IProvince[] | null = null;
   try {
      const { data: provinces } = await url.getAllTemples();
      templeResult = provinces;
      if (!provinces) {
         return {
            notFound: true,
         };
      }
   } catch (error) {
      console.log(error);
   }

   const a = templeResult?.map((e) => ({
      ...e,
      temples: e.temples.map((temple) => ({
         name: temple.name,
      })),
   }));

   return {
      props: {
         provinces: a as IProvince[],
      },
   };
};
