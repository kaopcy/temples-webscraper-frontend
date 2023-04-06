import localFont from 'next/font/local';

import { Provider } from 'react-redux';

import { wrapper } from '@/redux/store';

import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';

import BackgroundTransition from '@/components/BackgroundTransition';
import { PageTransitionProvider } from '@/contexts/PageTransitionContext';
import AllTemplesToolbar from '@/components/AllTempleToolbar';
import { useEffect, useState } from 'react';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '../styles/global.css';
import Toolbar from '@/components/Toolbar';
import AppToolbar from '@/components/AppToolbar';

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

   useEffect(() => {
      window.history.scrollRestoration = 'manual';
      const handleStart = (url: string) => {
         NProgress.start();
      };

      const handleStop = () => {
         NProgress.done();
      };

      router.events.on('routeChangeStart', handleStart);
      router.events.on('routeChangeComplete', handleStop);
      router.events.on('routeChangeError', handleStop);

      return () => {
         router.events.off('routeChangeStart', handleStart);
         router.events.off('routeChangeComplete', handleStop);
         router.events.off('routeChangeError', handleStop);
      };
   }, [router]);
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
         </main>
      </Provider>
   );
}

export default App;
