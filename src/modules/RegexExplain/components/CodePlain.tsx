import { CodeBlockBuilder } from '../utils/CodeBlockBuilder';
import CodeDescription from './CodeDescription';
import CodeExplainer from './CodeExplainer';
import CodeHighlighter from './CodeHighlighter';

const CodePlain: React.FC = () => {
   return (
      <div className="flex flex-col items-start gap-y-2">
         <div className="flex h-full w-full flex-col items-center md:flex-row ">
            <CodeHighlighter />
            <CodeExplainer />
         </div>
         <CodeDescription />
      </div>
   );
};

export default CodePlain;
