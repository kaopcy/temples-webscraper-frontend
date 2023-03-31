import { ProvinceEnum } from '@/types/filter.type';

export interface IProvince {
   _id: string;
   name: string;
   temples: ITemple[];
}

export interface ITemple {
   _id: string;
   name: string;
   provinceName: ProvinceEnum;
   link: string;
   detail: string;
   imageCount: number;
   images: (IImage | undefined)[] | null;
}

export interface IImage {
   url: string;
   src: string;
}


export interface IOptions {
   totalTemples: number;
   totalPages: number;
   nextPage: number;
}
