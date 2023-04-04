import { useUpdateEffect } from 'react-use';
import { useCodeBlock } from '../hooks/useCodeBlock';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useRef } from 'react';
import { Description } from '../utils/DescriptionBuilder';
import { CodeLine } from '../utils/CodeBlockBuilder';

const variants: Variants = {
   initial: {
      opacity: 0,
      y: '-100%',
   },
   animate: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 0.5,
      },
   },
   exit: {
      y: '70%',
      opacity: 0,
      transition: {
         duration: 0.5,
      },
   },
};

const CodeExplainer: React.FC = () => {
   const selectedLine = useCodeBlock()((state) => state.selectedLine);
   const codeBlock = useCodeBlock()((state) => state.codeBlock);
   const prevDescription = useRef<CodeLine | null>(null);
   useUpdateEffect(() => {
      if (selectedLine && codeBlock.getAllSameZoneLine(selectedLine)[0]?.getDescription()) {
         prevDescription.current = codeBlock.getAllSameZoneLine(selectedLine)[0];
      }
   }, [selectedLine]);

   const currentSelectedDescription = selectedLine
      ? codeBlock.getAllSameZoneLine(selectedLine)[0]?.getDescription()
      : prevDescription.current?.getDescription();

   const currentSelectedZone = selectedLine
      ? codeBlock.getAllSameZoneLine(selectedLine)[0]?.getZone()
      : prevDescription.current?.getZone();

   return (
      <div className="flex w-full flex-col self-stretch ">
         <div className=" h-full flex flex-col  w-full   bg-[#23272f] p-3 py-10 text-white ">

            <div className="relative  h-full w-full overflow-hidden ">
               <AnimatePresence mode="sync">
                  {selectedLine !== null && currentSelectedDescription && (
                     <motion.div
                        variants={variants}
                        animate="animate"
                        initial="initial"
                        exit="exit"
                        className=" md:absolute inset-0 flex h-full flex-col gap-y-10 md:overflow-y-auto"
                        key={`${currentSelectedZone}`}
                     >
                        <div className="">{currentSelectedDescription.detail}</div>
                        <div className="rounded-md bg-[#ffffff11] px-4 py-2">
                           "{currentSelectedDescription.input}""
                        </div>
                        <div className="">{currentSelectedDescription.output}</div>
                     </motion.div>
                  )}
               </AnimatePresence>
            </div>
         </div>
      </div>
   );
};

export default CodeExplainer;
