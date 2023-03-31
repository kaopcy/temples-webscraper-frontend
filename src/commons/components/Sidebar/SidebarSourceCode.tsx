import { Icon } from '@iconify/react';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';

import { PATH } from '@/configs/path';

import Link from '../Link';

const SidebarSourceCode: React.FC = () => {
   return (
      <Tooltip followCursor title="awdawd">
         <div className="flex w-full cursor-pointer flex-col items-start">
            <Link
               isBackgroundLocation
               to={PATH.sourceCode}
               className="flex w-full items-center  gap-x-3"
            >
               <div className="flex items-center gap-x-4">
                  <Icon className="h-5 w-5 text-text" icon="ph:code-block" />
               </div>
               <h4 className="font-bold">ซอร์สโค้ด</h4>
            </Link>
         </div>
      </Tooltip>
   );
};

export default SidebarSourceCode;
