import { useRouter } from "next/router";
import { createContext, useCallback, useMemo, useRef } from "react";

interface IPageTranstionState {
   isRight: (pageKey: string) => boolean
}

export const PageTransitionContext = createContext<IPageTranstionState>({
   isRight: ()=> false
})

export const PageTransitionProvider: React.FC<{ children: React.ReactNode }> = ({ children})=> {
   const lastState = useRef<boolean | null>(null)
   const router = useRouter();
   const isRight = useCallback((pageKey: string) => {
      const nextRoute = parseInt(
         Array.isArray(router.query.page) ? router.query.page[0] : router.query.page ?? '',
      );

      const curRoute = parseInt(pageKey);

      if (curRoute && nextRoute) {
         if (curRoute < nextRoute) {
            lastState.current = true
            return true;
         } else if (curRoute > nextRoute) {
            lastState.current = false
            return false;
         } else {
            return lastState.current ? lastState.current : false;
         }
      }
      return false;
   }, [router.query]);

   return (
      <PageTransitionContext.Provider value={{
         isRight
      }}>
         {children}
      </PageTransitionContext.Provider>
   )
}