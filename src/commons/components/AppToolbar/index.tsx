import { useRouter } from 'next/router';
import { useRef } from 'react';

import { IModalHandler } from '@/components/ModalLayout';

import AllTemplesPopup from '../AllTemplesPopup';
import CsvPopup from '../CsvPopup';
import AppToolbarButton from './AppToolbarButton';

const AppToolbar = () => {
   const allTemplePopupRef = useRef<IModalHandler>(null);
   const csvPopupRef = useRef<IModalHandler>(null);

   const { push, pathname } = useRouter();

   const onHomeClick = () => {
      push('/temples/1', '/temples/1', { scroll: false });
   };

   const isHomeActive = pathname === '/temples/[page]';
   const isRegexActive = pathname === '/regex-explain';
   const isAllTemplesActive = pathname === '/all-temples';

   const onAllTemplesClick = () => {
      csvPopupRef.current?.close();

      push('/all-temples', '/all-temples', { scroll: false });
      // allTemplePopupRef.current?.toggle();
   };
   const onRegexClick = () => {
      push('/regex-explain', '/regex-explain', { scroll: false });
   };
   const onCsvClick = () => {
      allTemplePopupRef.current?.close();
      csvPopupRef.current?.toggle();
   };

   return (
      <>
         <div className="fixed  right-[3%] bottom-10 z-0  flex flex-col-reverse items-center gap-3  md:right-[3%] md:bottom-10 md:gap-5 lg:right-[5%]">
            <AppToolbarButton
               active={isHomeActive}
               icon={isHomeActive ? 'mdi:home-sound-out' : 'mdi:home-outline'}
               description="หน้าหลัก"
               onClick={onHomeClick}
            />
            <AppToolbarButton
               active={false}
               icon="fluent:text-bullet-list-square-24-regular"
               description="รายชื่อวัดทั้งหมด"
               onClick={onAllTemplesClick}
            />
            <AppToolbarButton
               active={false}
               icon="ph:file-csv-light"
               description="ไฟล์ csv"
               onClick={onCsvClick}
            />
            <AppToolbarButton
               active={isRegexActive}
               icon="mdi:regular-expression"
               description="อธิบาย regular expression"
               onClick={onRegexClick}
            />
         </div>
         <AllTemplesPopup ref={allTemplePopupRef} />
         <CsvPopup ref={csvPopupRef} />
      </>
   );
};

export default AppToolbar;
