import { ProvinceEnum } from '@/types/filter.type';
import { provinceTranslator } from '@/utils/getTranslateProvince';
import { Router } from 'next/router';
import TemplesBackgroundText from './TemplesBackgroundText';
import TempleBackgroundText from './TempleBackgroundText';

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

         default:
            return <TempleBackgroundText router={router} />;
      }
   };

   return (
      <div className=" relative min-h-screen  overflow-x-hidden bg-text  ">
         <div className="fixed  flex h-full w-screen flex-col items-center justify-center ">
            {renderText()}
         </div>
         {children}
      </div>
   );
};

export default BackgroundTransition;
