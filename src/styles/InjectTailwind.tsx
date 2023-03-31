import { StyledEngineProvider } from '@mui/material/styles';
import React from 'react';

type Props = {
   children: React.ReactNode;
};

const InjectTailwind: React.FC<Props> = ({ children }) => {
   return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
};

export default InjectTailwind;
