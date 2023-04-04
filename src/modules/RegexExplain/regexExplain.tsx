import Layout from '@/components/layout';
import CodePlain from './components/CodePlain';

import { codeBlock as codeBlock1 } from './configs/code1.config';
import { codeBlock as codeBlock2 } from './configs/code2.config';

import { CodeBlockStore } from './contexts/CodeBlockStore';

const RegexExplain: React.FC = () => {
   return (
      <Layout pageKey="regex-explain">
         <div className=" min-h-screen w-full bg-[#181a1f] py-20">
            <div className="mx-auto flex max-w-[1000px] flex-col gap-y-10">
               <CodeBlockStore codeBlock={codeBlock1}>
                  <CodePlain />
               </CodeBlockStore>
               <CodeBlockStore codeBlock={codeBlock2}>
                  <CodePlain />
               </CodeBlockStore>
            </div>
         </div>
      </Layout>
   );
};

export default RegexExplain;
