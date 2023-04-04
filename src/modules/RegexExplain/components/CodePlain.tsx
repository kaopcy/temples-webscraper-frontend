import { CodeBlockBuilder } from '../utils/CodeBlockBuilder';
import CodeExplainer from './CodeExplainer';
import CodeHighlighter from './CodeHighlighter';

const CodePlain: React.FC = () => {
   return (
      <div className="flex md:flex-row flex-col h-full w-full items-center ">
         <CodeHighlighter />
         <CodeExplainer />
      </div>
   );
};

export default CodePlain;
