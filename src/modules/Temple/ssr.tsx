import { GetStaticProps, GetStaticPathsResult, GetStaticPaths } from 'next';

import { url } from '@/configs/apiUrl';
import { ITemple } from '@/types/temple.type';

export const getStaticPaths: GetStaticPaths = async () => {
   const { data } = await url.getAllTemples();
   const templesName = data
      .flatMap((e) => e.temples.map((e) => e.name))
      .filter((e) => !e.includes(' '));

   return {
      paths: templesName.map((e) => ({ params: { temple: e } })),
      fallback: true, // can also be true or 'blocking'
   };
};

export const getStaticProps: GetStaticProps<{
   temple: ITemple;
}> = async ({ params }) => {
   const { temple } = params as { temple: string };

   const templeQuery = Array.isArray(temple) ? temple[0] : temple ?? '';

   await new Promise((s) => {
      setTimeout(() => {
         s('');
      }, 1000);
   });

   let templeResult: ITemple | null = null;

   try {
      const { data: temple } = await url.getTempleByTempleName({ templeQuery });
      templeResult = temple;
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
