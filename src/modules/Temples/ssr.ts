import { wrapper } from '@/redux/store';
import { GetServerSideProps } from 'next';

import { ProvinceEnum } from '@/types/filter.type';
import { IOptions, ITemple } from '@/types/temple.type';
import { provinceFilterActions } from './redux/provinceFilter';
import { templeSearchActions } from './redux/templeSearch';
import { templesAction } from './redux/temples';

import { url } from '@/configs/apiUrl';

export const getServerSideProps: GetServerSideProps<{
   temples: ITemple[];
   options: IOptions;
   page: string;
   filter: ProvinceEnum[];
   search: string;
}> = wrapper.getServerSideProps((store) => async ({ query, res }) => {
   res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
   const { page, filter, search } = query;

   const pageQuery = Array.isArray(page) ? page[0] : page ?? '1';
   /** 
      result must look like "ยโสธร,แม่ฮ่องสอน" and i also give fallback in case of none of 
      province has selected
   */
   const filterQuery = Array.isArray(filter)
      ? filter.join(',')
      : filter ?? Object.keys(ProvinceEnum).join(',');
   const arrayFilterQuery = Array.isArray(filter)
      ? (filter as ProvinceEnum[])
      : typeof filter === 'string'
      ? ([filter] as ProvinceEnum[])
      : (Object.keys(ProvinceEnum) as ProvinceEnum[]);

   const searchQuery = Array.isArray(search) ? search[0] : search ?? '';

   let templesResult: ITemple[] | never[] = [];
   let optionsResult: IOptions = {
      nextPage: 1,
      totalPages: 1,
      totalTemples: 1,
   };

   try {
      const { data } = await url.getTemplesWithFilter({
         searchQuery,
         pageQuery,
         filterQuery,
      });

      const { data: temples, options } = data;

      templesResult = temples ?? templesResult;
      optionsResult = options ?? optionsResult;

      store.dispatch(
         templeSearchActions.initSearchQuery({
            initSearchQuery: searchQuery,
         }),
      );

      store.dispatch(
         provinceFilterActions.initFilter({
            provinces: arrayFilterQuery,
         }),
      );

      store.dispatch(
         templesAction.initTemples({
            currentPage: parseInt(pageQuery),
            nextPage: options.nextPage,
            temples: temples,
            totalPages: options.totalPages,
            totalTemples: options.totalTemples,
         }),
      );
   } catch (error) {
      console.log(error);
   }

   return {
      props: {
         temples: templesResult,
         options: optionsResult,
         page: pageQuery,
         filter: arrayFilterQuery,
         search: searchQuery,
      },
   };
});
