import React from 'react';

const LinkNewTab: React.FC<
   React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> = ({ children, ...rest }) => {
   return (
      <a {...rest} target="_blank" rel="noopener noreferrer">
         {children}
      </a>
   );
};

export default LinkNewTab;
