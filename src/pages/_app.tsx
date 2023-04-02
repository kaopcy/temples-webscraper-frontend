import localFont from 'next/font/local';

import { Provider } from 'react-redux';
import '../styles/global.css';

import { wrapper } from '@/redux/store';

import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';

import BackgroundTransition from '@/components/BackgroundTransition';
import { PageTransitionProvider } from '@/contexts/PageTransitionContext';
import Toolbar from '@/components/Toolbar';

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

export function App({ Component, ...rest }: AppProps) {
   const { store, props } = wrapper.useWrappedStore(rest);
   const { pageProps, router } = props;

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
            <Toolbar />
               </PageTransitionProvider>
            </BackgroundTransition>
         </main>
      </Provider>
   );
}

export default App;
