import { ITemple } from '@/types/temple.type';

export interface IOptions {
   totalTemples: number;
   totalPages: number;
   nextPage: number;
}

export interface IProvinceResponse {
   _id: string;
   name: string;
   temples: ITempleResponse[];
}

export interface ITempleResponse {
   data: ITemple[];
   options: IOptions;
}

export interface IImage {
   url: string;
   src: string;
}
