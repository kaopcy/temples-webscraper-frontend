import localFont from 'next/font/local';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { wrapper } from '@/redux/store';

import { useRouterChange } from '@/hooks/useRouterChange';

import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';

import BackgroundTransition from '@/components/BackgroundTransition';
import AppToolbar from '@/components/AppToolbar';
import { PageTransitionProvider } from '@/contexts/PageTransitionContext';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '../styles/global.css';

const LineSeedFont = localFont({
   src: [
      {
         path: '../styles/fonts/lineseed/LINESeedSansTH_W_He.woff',
         weight: '900',
         style: 'normal',
      },
      {
         path: '../styles/fonts/lineseed/LINESeedSansTH_W_XBd.woff',
         weight: '600',
         style: 'normal',
      },
      {
         path: '../styles/fonts/lineseed/LINESeedSansTH_W_Bd.woff',
         weight: '700',
         style: 'normal',
      },
      {
         path: '../styles/fonts/lineseed/LINESeedSansTH_W_Rg.woff',
         weight: '400',
         style: 'normal',
      },
      {
         path: '../styles/fonts/lineseed/LINESeedSansTH_W_Th.woff',
         weight: '300',
         style: 'normal',
      },
   ],
});

NProgress.configure({ showSpinner: false, trickle: false, minimum: 0.35 });

export function App({ Component, ...rest }: AppProps) {
   const { store, props } = wrapper.useWrappedStore(rest);
   const { pageProps, router } = props;

   useRouterChange({
      handleStart: () => {
         NProgress.start();
      },
      handleStop: () => {
         NProgress.done();
      },
   });

   return (
      <Provider store={store}>
         <main style={LineSeedFont.style}>
            <BackgroundTransition router={router}>
               <PageTransitionProvider>
                  <AnimatePresence
                     mode="wait"
                     onExitComplete={() =>
                        window.scrollTo({
                           top: 0,
                        })
                     }
                  >
                     <Component key={router.asPath} {...pageProps} />
                  </AnimatePresence>
                  <AppToolbar />
                  {/* <AllTemplesToolbar /> */}
                  {/* <Toolbar /> */}
               </PageTransitionProvider>
            </BackgroundTransition>
            <div id="portal"></div>
         </main>
      </Provider>
   );
}

export default App;
