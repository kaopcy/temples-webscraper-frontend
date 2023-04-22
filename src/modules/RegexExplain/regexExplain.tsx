import Layout from '@/components/layout';
import CodePlain from './components/CodePlain';

import { codeBlock as codeBlock1 } from './configs/code1.config';
import { codeBlock as codeBlock2 } from './configs/code2.config';
import { codeBlock as codeBlock3 } from './configs/code3.config';
import { codeBlock as codeBlock4 } from './configs/code4.config';
import { codeBlock as codeBlock5 } from './configs/code5.config';
import { codeBlock as codeBlock6 } from './configs/code6.config';

import { classname } from '@/utils/getClassname';
import { Icon } from '@iconify/react';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { CodeBlockStore } from './contexts/CodeBlockStore';
import { useMode } from './hooks/useMode';

const RegexExplain: React.FC = () => {
   const mode = useMode((state) => state.mode);
   const toggleMode = useMode((state) => state.toggleMode);
   const exitFullScreen = useMode((state) => state.exitFullScreen);

   const portalRef = useRef<Element | null>(null);
   const documentRef = useRef<HTMLElement | null>(null);
   const [_, setMounted] = useState(false);

   const onClick = () => {
      if (!mode) {
         document.documentElement.requestFullscreen();
      } else {
         document.exitFullscreen();
      }
      toggleMode();
   };

   useEffect(() => {
      const handleFullscreenChange = () => {
         if (!document.fullscreenElement) {
            exitFullScreen();
         }
      };
      document.addEventListener('fullscreenchange', handleFullscreenChange);
      return () => {
         document.removeEventListener('fullscreenchange', handleFullscreenChange);
      };
   }, []);

   const render = () => (
      <div
         className={classname(
            ' flex min-h-screen w-full flex-col items-center bg-[#181a1f] px-4 pt-32 pb-10',
         )}
      >
         <h1 className="mb-0 text-center text-3xl font-bold text-white md:mb-20 md:text-5xl">
            อธิบาย Regular expression ที่ใช้
         </h1>
         <div
            className={classname(
               'mx-auto flex w-full flex-col gap-y-10',
               mode ? 'max-w-none' : 'max-w-[1100px]',
            )}
         >
            <CodeBlockStore startLine={codeBlock1.getStartLineNumber()} codeBlock={codeBlock1}>
               <CodePlain />
            </CodeBlockStore>
            <CodeBlockStore startLine={codeBlock2.getStartLineNumber()} codeBlock={codeBlock2}>
               <CodePlain />
            </CodeBlockStore>

            <CodeBlockStore startLine={codeBlock3.getStartLineNumber()} codeBlock={codeBlock3}>
               <CodePlain />
            </CodeBlockStore>
            <CodeBlockStore startLine={codeBlock4.getStartLineNumber()} codeBlock={codeBlock4}>
               <CodePlain />
            </CodeBlockStore>
            <CodeBlockStore startLine={codeBlock5.getStartLineNumber()} codeBlock={codeBlock5}>
               <CodePlain />
            </CodeBlockStore>
            <CodeBlockStore startLine={codeBlock6.getStartLineNumber()} codeBlock={codeBlock6}>
               <CodePlain />
            </CodeBlockStore>

            
            <div className="mt-12 mb-5 text-base leading-8 text-white md:text-xl ">
               <div className="indent-12 mb-4">
                  จากเดิม ใน Assignment ของวิชา Theory of Computaion ได้ระบุ requirement
                  ว่าต้องทำการดึงข้อมูลชื่อวัดในแต่ละจังหวัดมาเพียง ส่วนเดียว แต่ใน website
                  วัดไทยนี้ จะทำการดึงข้อมูลเพิ่มขึ้นมาอีกสองส่วน คือ link ของวัด กับ
                  รายละเอียดของวัด เพื่อนำมาแสดงข้อมูลเพิ่มเติม นอกจากชื่อวัดลงใน website
                  โดยกระบวนการอย่างคร่าว คือ link ของแต่ละวัดที่อยู่ใน a tag นั่น จะนำไป scraping
                  ต่ออีกครั้ง เพื่อดึงข้อมูล่าง ๆ ของวัดนั้น แล้วนำข้อมูลดังกล่าว
                  มาคัดกรองให้เหลือส่วนที่จำเป็นในการแสดงเนื้อหาในหน้าเว็บไซต์เท่านั้น
               </div>

               

               <div className="indent-12 mb-4">
                  นอกจากนี้ ยังมีส่วนการทำงานที่ยังไม่ได้กล่าวถึง คือ link รูปภาพของแต่ละวัด ซึ่ง
                  website วัดไทย ก็ทำการแสดงรูปภาพของแต่ละวัดด้วย แต่ใน section นี้
                  ขอไม่กล่าวถึงกระบวนการดังกล่าว เนื่องจากมีรายละเอียดขั้นตอนเป็นจำนวนมาก
               </div>

               <div className="indent-12 mb-4">
                  source code ที่จำลองการทำงาน scraping สามารถดูได้ที่ link นี้, ส่วน source code
                  ที่ได้ดัดแปลงไปทำงานบน backend สามารถดูได้ที่ link นี้ และ source code
                  ทั้งหมดที่เป็น backend สามารถดู repository ได้ที่ link นี้
               </div>
            </div>
            <div className="mt-20 flex items-center  gap-x-4 self-center">
               <button
                  onClick={onClick}
                  className=" flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-text-light hover:bg-black"
               >
                  <Icon className="h-6 w-6 text-white" icon="mdi:presentation-play" />
               </button>
               <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/kaopcy/temples-webscraper-backend/blob/main/app/libs/_templeScraper.py"
                  className=" flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-text-light hover:bg-black"
               >
                  <Icon className="h-6 w-6 text-white" icon="ic:round-code" />
               </a>
            </div>
         </div>
      </div>
   );

   useEffect(() => {
      portalRef.current = document.querySelector<HTMLElement>('#present');
      documentRef.current = document.documentElement;
      setMounted(true);
   }, []);

   if (mode && portalRef.current)
      return createPortal(
         <div className="fixed top-0 left-0 z-[999] h-screen w-screen overflow-y-scroll">
            {render()}
         </div>,
         portalRef.current,
      );

   return <Layout pageKey="regex-explain">{render()}</Layout>;
};

export default RegexExplain;
