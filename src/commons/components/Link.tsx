import React from 'react';
import { Link as RouterLink, LinkProps, useLocation } from 'react-router-dom';

interface IProps {
   isBackgroundLocation?: boolean;
}

const Link: React.FC<LinkProps & IProps> = ({ isBackgroundLocation, children, ...rest }) => {
   const location = useLocation();
   return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <RouterLink state={{ backgroundLocation: isBackgroundLocation ? location : null }} {...rest}>
         {children}
      </RouterLink>
   );
};

Link.defaultProps = {
   isBackgroundLocation: false,
};

export default Link;
