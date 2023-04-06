import HTMLParser, { HTMLReactParserOptions, Element } from 'html-react-parser';

import { useUpdateEffect } from 'react-use';
import { useCodeBlock } from '../hooks/useCodeBlock';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
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
   const selectedDataZone = useCodeBlock()((state) => state.selectedDataZone);
   const codeBlock = useCodeBlock()((state) => state.codeBlock);
   const prevDescription = useRef<CodeLine | null>(null);
   useEffect(() => {
      const matches = document.querySelectorAll(
         `span[data-zone='${selectedDataZone}']`,
      ) as NodeListOf<HTMLElement>;
      matches.forEach((node) => {
         node.style.backgroundColor = '#ffef4015';
      });

      return () => {
         const matches = document.querySelectorAll(
            `span[data-zone='${selectedDataZone}']`,
         ) as NodeListOf<HTMLElement>;
         matches.forEach((node) => {
            node.style.backgroundColor = 'transparent';
         });
      };
   }, [selectedDataZone]);

   const currentSelectedDescription = selectedLine
      ? codeBlock.getAllSameZoneLine(selectedLine)[0]?.getDescription()
      : prevDescription.current?.getDescription();

   const currentSelectedZone = selectedLine
      ? codeBlock.getAllSameZoneLine(selectedLine)[0]?.getZone()
      : prevDescription.current?.getZone();

   return (
      <div className=" flex w-full flex-col self-stretch pt-10">
         <div className=" flex h-full w-full  flex-col  border border-l-0 border-[#383838] bg-[#181a1f]  text-white ">
            <div className="relative  h-full w-full overflow-hidden ">
               <AnimatePresence initial={false} mode="sync">
                  {selectedLine !== null && currentSelectedDescription && (
                     <motion.div
                        variants={variants}
                        animate="animate"
                        initial="initial"
                        exit="exit"
                        className=" inset-0 flex h-full flex-col gap-y-10 py-4 px-4 md:absolute md:overflow-y-auto"
                        key={`${currentSelectedZone}`}
                     >
                        <div className="">{codeBlock.getCodeSameZoneLine(selectedLine)}</div>
                        <div className="">
                           {HTMLParser(currentSelectedDescription.detail, options)}
                        </div>
                        <div className="rounded-md bg-[#ffffff11] px-4 py-2">
                           "{currentSelectedDescription.input}""
                        </div>
                        <div className="">{HTMLParser(currentSelectedDescription.output)} </div>
                     </motion.div>
                  )}
               </AnimatePresence>
            </div>
         </div>
      </div>
   );
};

const options: HTMLReactParserOptions = {
   replace: (domNode) => {
      console.log(domNode instanceof Element);
      if (domNode instanceof Element && domNode.attribs) {
         if (domNode.type !== 'tag' || domNode.name !== 'p') {
            console.log('first');
            return domNode.children;
         }
         console.log('first');
      }
   },
};

export default CodeExplainer;
