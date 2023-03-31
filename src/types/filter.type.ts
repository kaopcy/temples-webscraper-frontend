export enum ProvinceEnum {
   yasothon = 'yasothon',
   mukdaharn = 'mukdaharn',
   mahasarakam = 'mahasarakam',
   maehongson = 'maehongson',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UniqueCollection<T extends Record<string, string | number>> = T extends any
   ? keyof { [K in T[keyof T]]: K extends string | number ? Record<K, K> : never }
   : never;

type EnumRecord = Record<keyof typeof ProvinceEnum, typeof ProvinceEnum[keyof typeof ProvinceEnum]>;
export type ProvinceFilter = UniqueCollection<EnumRecord>[];
