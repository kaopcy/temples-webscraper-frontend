import SyntaxHighlighter from 'react-syntax-highlighter';
import nightOwl from 'react-syntax-highlighter/dist/cjs/styles/hljs/night-owl';
import { useCodeBlock } from '../hooks/useCodeBlock';
import { classname } from '@/utils/getClassname';
import { useMode } from '../hooks/useMode';

const HighlighterContainer: React.FC = () => {
   const mode = useMode((state) => state.mode);

   const setSelectedLine = useCodeBlock()((state) => state.setSelectedLine);
   const setSelectedDataZone = useCodeBlock()((state) => state.setSelectedZone);
   const codeBlock = useCodeBlock()((state) => state.codeBlock);

   const onLineMouseEnter = (e: React.MouseEvent<HTMLElement, MouseEvent>, lineNumber: number) => {
      setSelectedLine(lineNumber);

      const dataZone = e.currentTarget.getAttribute('data-zone');
      if (dataZone) setSelectedDataZone(dataZone);
   };

   return (
      <section className="my-auto  w-full  overflow-hidden  rounded-md border border-text">
         <div className="flex h-10 w-full items-center bg-[#484A50] p-5 font-primary text-white">
            {codeBlock.getName()}
         </div>

         <div className="h-full w-full   overflow-hidden border-text-light">
            <SyntaxHighlighter
               language="python"
               showLineNumbers
               startingLineNumber={codeBlock.getStartLineNumber()}
               wrapLines
               PreTag={'div'}

               customStyle={{
                  padding: '10px 17px 10px 0px',
                  boxSizing: 'content-box',
                  width: '100%',
                  overflowX: 'scroll'
               }}
               codeTagProps={{
                  className: classname(
                     'flex flex-col  w-full min-w-fit  overflow-y-hidden !font-code pb-6',
                     mode ? 'min-h-[500px]' : 'min-h-[350px]',
                  ),
               }}
               lineNumberStyle={{
                  width: '42px',
               }}
               lineProps={(lineNumber) => {
                  return {
                     style: {
                        display: 'inline-block',
                        paddingRight: '10px',
                     },
                     onMouseEnter: (e) => onLineMouseEnter(e, lineNumber),
                     'data-zone': `${codeBlock.getName()}-${codeBlock
                        .getLine(lineNumber)
                        .getZone()}`,
                  };
               }}
               children={codeBlock.getCode()}
               style={nightOwl}
            />
         </div>
      </section>
   );
};

export default HighlighterContainer;
