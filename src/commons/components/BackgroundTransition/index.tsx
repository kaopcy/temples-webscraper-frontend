import { Router } from 'next/router';

import RegexExplainBackgroundText from './RegexExplainBackgroundText';
import TempleBackgroundText from './TempleBackgroundText';
import TemplesBackgroundText from './TemplesBackgroundText';

const BackgroundTransition: React.FC<{ children: React.ReactNode; router: Router }> = ({
   children,
   router,
}) => {
   const basePath = router.route.split('/')[1];

   const renderText = () => {
      switch (basePath) {
         case 'temples':
            return <TemplesBackgroundText router={router} />;

         case 'temple':
            return <TempleBackgroundText router={router} />;

         case 'regex-explain':
            return <RegexExplainBackgroundText router={router} />;

         default:
            return <TempleBackgroundText router={router} />;
      }
   };

   return (
      <div className=" relative min-h-screen  overflow-x-hidden bg-neutral-600  ">
         <div className="fixed  flex h-full w-screen flex-col items-center justify-center ">
            {renderText()}
         </div>
         {children}
      </div>
   );
};

export default BackgroundTransition;
