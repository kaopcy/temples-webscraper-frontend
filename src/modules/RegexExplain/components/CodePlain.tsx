import CodeDescription from './CodeDescription';
import CodeExplainer from './CodeExplainer';
import CodeHighlighter from './CodeHighlighter';
import CodeInputPlain from './CodeInputPlain';

const CodePlain: React.FC = () => {
   return (
      <div className="flex flex-col items-start gap-y-2">
         <CodeDescription />
         <div className="flex h-full w-full flex-col items-center md:flex-row ">
            <CodeHighlighter />
            <CodeExplainer />
         </div>
         {/* <div className="flex items-start w-full">
            <CodeInputPlain />
            <CodeInputPlain />
         </div> */}
      </div>
   );
};

export default CodePlain;
