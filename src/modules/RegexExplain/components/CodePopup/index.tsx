import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { Variants, motion } from 'framer-motion';
import { forwardRef } from 'react';
import ModalLayout, { IModalHandler } from '@/components/ModalLayout';
import { Icon } from '@iconify/react';
import { ProvinceEnum } from '@/types/filter.type';
import { provinceTranslator } from '@/utils/getTranslateProvince';
import { useCodeBlock } from '../../hooks/useCodeBlock';

const ContainerVariants: Variants = {
   initial: {
      scaleX: 0.8,
      x: '-50%',
      y: '100%',
   },
   animate: {
      scaleX: 1,
      y: '-50%',
      x: '-50%',
      opacity: 1,
      transition: {
         duration: 0.3,
      },
   },
   exit: {
      scaleX: 0.8,
      y: '100%',
      opacity: 0,
      transition: {
         duration: 0.3,
      },
   },
};

const CodePopup = forwardRef<IModalHandler>((_, ref) => {
   const selectedLine = useCodeBlock()((state) => state.selectedLine);
   const codeBlock = useCodeBlock()((state) => state.codeBlock);

   const currentSelectedDescription = selectedLine
      ? codeBlock.getAllSameZoneLine(selectedLine)[0]?.getDescription()
      : null;

   return (
      <ModalLayout ref={ref}>
         <motion.div
            variants={ContainerVariants}
            animate="animate"
            initial="initial"
            exit="exit"
            className="fixed top-1/2 left-1/2 flex w-full max-w-[1000px] flex-col rounded-md   bg-white p-4 text-text"
         >
            <button type="button" className="absolute right-2 md:-right-2 bottom-[105%] pointer-events-none ">
               <Icon className="h-8 w-8 text-gray-300" icon="eva:close-fill" />
            </button>
            {selectedLine && (
               <SyntaxHighlighter
                  language="python"
                  wrapLines
                  PreTag={'div'}
                  customStyle={{
                     padding: '10px 17px 12px 17px',
                     boxSizing: 'content-box',
                     borderRadius: '6px',
                  }}
                  codeTagProps={{
                     className: 'flex flex-col  w-full  overflow-hidden ',
                  }}
                  lineNumberStyle={{
                     width: '42px',
                  }}
                  children={codeBlock.getCodeSameZoneLine(selectedLine).trimStart()}
                  style={nightOwl}
               />
            )}

            <div className="mt-14 flex items-stretch gap-4">
               {selectedLine !== null && (
                  <>
                     <div className="relative w-full break-all rounded-md bg-text-lighter px-4 py-2  tracking-tighter">
                        <div className="absolute bottom-full left-3 rounded-t-md bg-text px-4 py-1 text-white">
                           Input
                        </div>
                        {currentSelectedDescription?.input}
                     </div>
                     <div className="relative w-full break-all rounded-md bg-text-lighter px-4 py-2  tracking-tighter ">
                        <div className="absolute bottom-full left-3 rounded-t-md bg-text px-4 py-1 text-white">
                           Output
                        </div>
                        {currentSelectedDescription?.output}
                     </div>
                  </>
               )}
            </div>
         </motion.div>
      </ModalLayout>
   );
});

export default CodePopup;
