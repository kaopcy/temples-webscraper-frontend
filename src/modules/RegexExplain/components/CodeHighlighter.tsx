import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useCodeBlock } from '../hooks/useCodeBlock';

const HighlighterContainer: React.FC = () => {
   const setSelectedLine = useCodeBlock()((state) => state.setSelectedLine);
   const codeBlock = useCodeBlock()((state) => state.codeBlock);

   const onLineMouseEnter = (e: React.MouseEvent<HTMLElement, MouseEvent>, lineNumber: number) => {
      setSelectedLine(lineNumber);

      const matches = document.querySelectorAll(
         `span[data-zone='${e.currentTarget.getAttribute('data-zone')}']`,
      ) as NodeListOf<HTMLElement>;
      matches.forEach((node) => {
         node.style.backgroundColor = '#00ff5511';
      });
   };
   const onLineMouseLeave: React.MouseEventHandler<HTMLElement> = (e) => {
      const matches = document.querySelectorAll(
         `span[data-zone='${e.currentTarget.getAttribute('data-zone')}']`,
      ) as NodeListOf<HTMLElement>;
      matches.forEach((node) => {
         node.style.backgroundColor = 'transparent';
      });
   };

   return (
      <section className="my-auto max-h-[500px] w-full max-w-[700px] overflow-hidden  rounded-md">
         <div className="flex h-10 w-full items-center bg-[#23272f] p-5 text-white ">
            {codeBlock.getName()}
         </div>

         <div className="w-full  border-text-light ">
            <SyntaxHighlighter
               language="python"
               showLineNumbers
               wrapLines
               PreTag={'div'}
               codeTagProps={{
                  className: 'flex flex-col max-h-[420px] w-full',
               }}
               lineNumberStyle={{
                  width: '42px',
               }}
               lineProps={(lineNumber) => {
                  return {
                     style: {
                        width: '100%',
                        paddingRight: '100px',
                     },
                     onMouseEnter: (e) => onLineMouseEnter(e, lineNumber),
                     onMouseLeave: onLineMouseLeave,
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
