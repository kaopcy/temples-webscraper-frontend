import axios from 'axios';
import { ITempleResponse } from '@/types/api/temple.response.type';
import { IProvince, ITemple } from '@/types/temple.type';

const basepath = process.env.NEXT_PUBLIC_BACKEND_URL || 'localhost:4001';

const join = (path: string) => encodeURI(`${basepath}${path}`);

interface IGetTempleWithFilterQuery {
   searchQuery: string;
   pageQuery: string;
   filterQuery: string;
}

export const url = {
   getTemplesWithFilter: ({ filterQuery, pageQuery, searchQuery }: IGetTempleWithFilterQuery) =>
      axios.get<ITempleResponse>(
         join(`/temple/aa/?search=${searchQuery}&page=${pageQuery}&filter=${filterQuery}`),
      ),
   getTempleByTempleName: ({ templeQuery }: { templeQuery: string }) =>
      axios.get<ITemple>(join(`/temple/${templeQuery}`)),
   getAllTemples: () => axios.get<IProvince[]>(join('/province')),
   getCsv: ({ provinces }: { provinces: string }) =>
      axios.get<Blob>(join(`/province/csv?provincesQuery=${provinces}`) , { responseType: 'blob' }),
};
