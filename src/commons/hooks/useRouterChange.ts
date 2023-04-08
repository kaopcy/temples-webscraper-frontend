import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useRouterChange = (options?: { handleStart?: () => void; handleStop?: () => void }) => {
   const router = useRouter();

   const [state, setState] = useState<boolean>(false);

   const middleStart = (handle?: () => void) => {
      return () => {
         if (handle) handle();
         setState(true);
      };
   };

   const middleStop = (handle?: () => void) => {
      return () => {
         if (handle) handle();
         setState(false);
      };
   };

   useEffect(() => {
      window.history.scrollRestoration = 'manual';

      router.events.on('routeChangeStart', middleStart(options?.handleStart));
      router.events.on('routeChangeComplete', middleStop(options?.handleStop));
      router.events.on('routeChangeError', middleStop(options?.handleStop));

      return () => {
         router.events.off('routeChangeStart', middleStart(options?.handleStart));
         router.events.off('routeChangeComplete', middleStop(options?.handleStop));
         router.events.off('routeChangeError', middleStop(options?.handleStop));
      };
   }, [router]);
   return { state };
};
