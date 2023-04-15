import { ProvinceEnum } from '@/types/filter.type';

export const provinceTranslator = (province: ProvinceEnum): string => {
   const a = {
      [ProvinceEnum.maehongson]: 'แม่ฮ่องสอน',
      [ProvinceEnum.mahasarakam]: 'มหาสารคาม',
      [ProvinceEnum.mukdaharn]: 'มุกดาหาร',
      [ProvinceEnum.yasothon]: 'ยโสธร',
      // [ProvinceEnum.chaengrai]: 'จังหวัดเชียงราย',
      // [ProvinceEnum.trang]: 'จังหวัดตรัง',
      // [ProvinceEnum.trat]: 'จังหวัดตราด',
      // [ProvinceEnum.chumporn]: 'จังหวัดชุมพร',
      // [ProvinceEnum.uttaradit]: 'จังหวัดอุตรดิต',
   };
   return a[province];
};
