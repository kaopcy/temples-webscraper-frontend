export interface ITrip {
   name: string;
   _id: string;
   link: string;
   detail: string;
   images: IImage[];
}

interface IImage {
   url: string;
   src: string;
}

export interface ITripOptions {
   keyword: string;
   isLoading: boolean;
   availableTags: string[];
}
