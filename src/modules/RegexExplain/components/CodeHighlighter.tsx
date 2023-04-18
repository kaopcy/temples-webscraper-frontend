import SyntaxHighlighter from 'react-syntax-highlighter';
import nightOwl from 'react-syntax-highlighter/dist/cjs/styles/hljs/night-owl';
import { useCodeBlock } from '../hooks/useCodeBlock';

const HighlighterContainer: React.FC = () => {
   const setSelectedLine = useCodeBlock()((state) => state.setSelectedLine);
   const setSelectedDataZone = useCodeBlock()((state) => state.setSelectedZone);
   const codeBlock = useCodeBlock()((state) => state.codeBlock);

   const onLineMouseEnter = (e: React.MouseEvent<HTMLElement, MouseEvent>, lineNumber: number) => {
      setSelectedLine(lineNumber);

      const dataZone = e.currentTarget.getAttribute('data-zone');
      if (dataZone) setSelectedDataZone(dataZone);
   };

   return (
      <section className="my-auto  w-full max-w-[700px] overflow-hidden  rounded-md border border-text">
         <div className="flex h-10 w-full items-center bg-[#484A50] p-5 font-code text-white">
            {codeBlock.getName()}
         </div>

         <div className="h-full w-full  overflow-hidden border-text-light">
            <SyntaxHighlighter
               language="python"
               showLineNumbers
               wrapLines
               PreTag={'div'}
               customStyle={{
                  padding: '10px 17px 10px 0px',
                  boxSizing: 'content-box',
                  width: '100%',
               }}
               codeTagProps={{
                  className:
                     'flex flex-col  w-full  overflow-y-hidden overflow-x-scroll min-h-[350px] !font-code pb-6',
               }}
               lineNumberStyle={{
                  width: '42px',
               }}
               lineProps={(lineNumber) => {
                  return {
                     style: {
                        width: '140%',
                        paddingRight: '100px',
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
