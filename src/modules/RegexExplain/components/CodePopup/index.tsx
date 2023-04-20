import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import ModalLayout, { IModalHandler } from '@/components/ModalLayout';
import { Icon } from '@iconify/react';
import { Variants, motion } from 'framer-motion';
import { forwardRef, useRef } from 'react';
import { useCodeBlock } from '../../hooks/useCodeBlock';
import { useMode } from '../../hooks/useMode';
import CodePopupInput from './CodePopupInput';
import { classname } from '@/utils/getClassname';
import CodePopupOutput from './CodePopupOutput';
import { useSyncScroll } from '../../hooks/useScrollLink';

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

   const mode = useMode((state) => state.mode);

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
            className={classname(
               'fixed top-1/2 left-1/2 z-[1000] flex  w-[90%] flex-col rounded-md   bg-white p-4 text-text',
               mode ? 'max-w-none' : 'max-w-[1000px]',
            )}
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
                     fontSize: mode ? '20px' : '16px',
                     borderRadius: '6px',
                  }}
                  codeTagProps={{
                     className: 'flex flex-col  w-full  overflow-hidden font-code',
                  }}
                  lineNumberStyle={{
                     width: '42px',
                  }}
                  children={codeBlock.getCodeSameZoneLine(selectedLine).trimStart()}
                  style={nightOwl}
               />
            )}
            <div className="relative mt-14">
               <div className="flex max-h-[400px] items-stretch gap-4 overflow-y-auto ">
                  {selectedLine !== null && (
                     <>
                        <CodePopupInput
                           text={currentSelectedDescription?.input ?? ''}
                           label="Input"
                        />
                        <CodePopupOutput
                           text={currentSelectedDescription?.output ?? ''}
                           label="Output"
                        />
                     </>
                  )}
               </div>
               <div className="absolute bottom-full left-3 rounded-t-md bg-text px-4 py-1 text-white">
                  input
               </div>
               <div className="absolute bottom-full left-[calc(50%+16px)] rounded-t-md bg-text px-4 py-1 text-white">
                  output
               </div>
            </div>
         </motion.div>
      </ModalLayout>
   );
});

export default CodePopup;
