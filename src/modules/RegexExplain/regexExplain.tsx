import Layout from '@/components/layout';
import CodePlain from './components/CodePlain';

import { codeBlock as codeBlock1 } from './configs/code1.config';
import { codeBlock as codeBlock3 } from './configs/code3.config';

import { CodeBlockStore } from './contexts/CodeBlockStore';

const RegexExplain: React.FC = () => {
   return (
      <Layout pageKey="regex-explain">
         <div className=" flex min-h-screen w-full flex-col items-center bg-[#181a1f] py-32 px-4">
            <h1 className="mb-0 md:mb-20 text-3xl text-center md:text-5xl font-bold text-white">
               อธิบาย Regular expression ที่ใช้
            </h1>
            <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-y-10">
               <CodeBlockStore codeBlock={codeBlock1}>
                  <CodePlain />
               </CodeBlockStore>
               <CodeBlockStore codeBlock={codeBlock3}>
                  <CodePlain />
               </CodeBlockStore>
            </div>
         </div>
      </Layout>
   );
};

export default RegexExplain;
