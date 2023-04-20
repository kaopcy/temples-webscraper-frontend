import { classname } from '@/utils/getClassname';

import { splitInputOutput } from '../../utils/splitInputOutputString';
import { useMode } from '../../hooks/useMode';
import { forwardRef } from 'react';

const CodePopupInput = forwardRef<HTMLDivElement, { text: string; label: string }>(
   ({ text, label }, ref) => {
      const mode = useMode((state) => state.mode);

      const removedInput = splitInputOutput(text).reduce((acc, cur) => `${acc}${cur.substr}`, '');

      return (
         <div
            className={classname(
               'relative h-full w-full break-all rounded-md  bg-[rgba(217,217,217,0.5)]  py-2 px-4 tracking-tighter',
               mode ? 'h-[400px] text-xl' : 'h-[unset] text-base',
            )}
         >
            <div
               className="font-code"
               style={{
                  whiteSpace: 'break-spaces',
               }}
            >
               {removedInput}
            </div>
         </div>
      );
   },
);

export default CodePopupInput;
