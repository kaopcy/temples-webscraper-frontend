import { Icon } from '@iconify/react';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';

const SidebarCSVFile: React.FC = () => {
   return (
      <Tooltip followCursor title="awdawd">
         <section className="flex w-full cursor-pointer flex-col items-start ">
            <div className="flex w-full items-center gap-x-3">
               <div className="flex items-center gap-x-4">
                  <Icon className="h-5 w-5 text-text" icon="ph:file-csv" />
               </div>
               <h4 className="font-bold">ไฟล์ csv</h4>
            </div>
         </section>
      </Tooltip>
   );
};

export default SidebarCSVFile;
