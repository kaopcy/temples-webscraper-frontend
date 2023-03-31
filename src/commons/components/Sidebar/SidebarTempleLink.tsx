import { Icon } from '@iconify/react';
import React from 'react';

import { ITemple } from '@/types/temple.type';

interface IProps {
   temple: ITemple;
}

const SidebarTempleLink: React.FC<IProps> = ({ temple }) => {
   return (
      <span className="flex items-center text-base text-text">
         <Icon icon="bi:dot" className="mt-0.5 text-text-lighter" />
         {temple.name}
      </span>
   );
};

export default SidebarTempleLink;
