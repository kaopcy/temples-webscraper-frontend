import { wrapper } from '@/redux/store';
import axios from 'axios';
import { GetServerSideProps } from 'next';

import { ITempleResponse } from '@/types/api/temple.response.type';

import { ProvinceEnum } from '@/types/filter.type';
import { IOptions, ITemple } from '@/types/temple.type';
import { templeSearchActions } from './redux/templeSearch';
import { provinceFilterActions } from './redux/provinceFilter';
import { templesAction } from './redux/temples';

export const getServerSideProps: GetServerSideProps<{
   temples: ITemple[];
   options: IOptions;
   page: string;
   filter: ProvinceEnum[];
   search: string;
}> = wrapper.getServerSideProps((store) => async ({ query }) => {
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

   console.log(arrayFilterQuery);

   const searchQuery = Array.isArray(search) ? search[0] : search ?? '';

   const encodedUrl = encodeURI(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/temple/aa/?search=${searchQuery}&page=${pageQuery}&filter=${filterQuery}`,
   );

   let templesResult: ITemple[] | never[] = [];
   let optionsResult: IOptions = {
      nextPage: 1,
      totalPages: 1,
      totalTemples: 1,
   };

   try {
      const { data } = await axios.get<ITempleResponse>(encodedUrl);
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
      // console.log(error)
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
