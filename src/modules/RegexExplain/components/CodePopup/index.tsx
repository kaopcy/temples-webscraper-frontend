import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { Variants, motion } from 'framer-motion';
import { forwardRef } from 'react';
import ModalLayout, { IModalHandler } from '@/components/ModalLayout';
import { Icon } from '@iconify/react';
import { ProvinceEnum } from '@/types/filter.type';
import { provinceTranslator } from '@/utils/getTranslateProvince';
import { useCodeBlock } from '../../hooks/useCodeBlock';
import CodePopupInput from './CodePopupInput';

const ContainerVariants: Variants = {
   initial: {
      scaleX: 0.8,
      opacity: 0,
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
            <button
               type="button"
               className="pointer-events-none absolute right-2 bottom-[105%] md:-right-2 "
            >
               <Icon className="h-8 w-8 text-gray-300" icon="eva:close-fill" />
            </button>
            {selectedLine && (
               <SyntaxHighlighter
                  language="python"
                  wrapLines
                  PreTag={'div'}
                  customStyle={{
                     padding: '15px 17px 17px 17px',
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
                     <CodePopupInput text={currentSelectedDescription?.input ?? ''} label="Input" />
                     <CodePopupInput
                        text={currentSelectedDescription?.output ?? ''}
                        label="Output"
                     />
                  </>
               )}
            </div>
         </motion.div>
      </ModalLayout>
   );
});

export default CodePopup;
