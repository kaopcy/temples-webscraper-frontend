import { classname } from '@/utils/getClassname';

import { splitInputOutput } from '../../utils/splitInputOutputString';
import { useMode } from '../../hooks/useMode';

import HtmlParser from 'html-react-parser';
import { forwardRef } from 'react';

const CodePopupOutput = forwardRef<HTMLDivElement, { text: string; label: string }>(
   ({ text, label }, ref) => {
      const mode = useMode((state) => state.mode);

      const nonExisted = (text: string, key: string) => (
         <span key={key} className="text-text opacity-20">
            {text}
         </span>
      );
      const existed = (text: string, key: string) => (
         <span key={key} className="text-text">
            {text}
         </span>
      );

      const removedInput = splitInputOutput(text);

      return (
         <div
            className={classname(
               'relative h-full w-full break-all rounded-md bg-[rgba(217,217,217,0.5)] px-4  py-2  tracking-tighter',
               mode ? 'h-[400px] text-xl' : 'h-[unset] text-base',
            )}
         >
            <div
               className="font-code"
               style={{
                  whiteSpace: 'break-spaces',
               }}
            >
               {removedInput.map((e, index) =>
                  e.is_existed ? existed(e.substr, `${index}`) : nonExisted(e.substr, `${index}`),
               )}
            </div>
         </div>
      );
   },
);

export default CodePopupOutput;
