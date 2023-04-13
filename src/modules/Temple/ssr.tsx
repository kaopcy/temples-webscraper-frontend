import { GetServerSideProps } from 'next';

import { url } from '@/configs/apiUrl';
import { ITemple } from '@/types/temple.type';

export const getServerSideProps: GetServerSideProps<{
   temple: ITemple;
}> = async ({ query, res }) => {
   res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
   const { temple } = query;

   const templeQuery = Array.isArray(temple) ? temple[0] : temple ?? '';

   let templeResult: ITemple | null = null;
   console.log(temple);

   try {
      const { data: temple } = await url.getTempleByTempleName({ templeQuery });
      templeResult = temple;
      console.log(templeResult);
      if (!temple) {
         return {
            notFound: true,
         };
      }
   } catch (error) {
      console.log(error);
   }

   return {
      props: {
         temple: templeResult as ITemple,
      },
   };
};
