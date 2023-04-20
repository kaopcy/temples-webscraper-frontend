import { useEffect, RefObject } from 'react';

export const useSyncScroll = (refs: RefObject<HTMLElement>[]) => {
   useEffect(() => {
      const handleScroll = (event: Event) => {
         const target = event.target as HTMLElement;
         const scrollTop = target.scrollTop;
         
         refs.forEach((ref) => {
            if (ref.current && ref.current !== target) {
               ref.current.scrollTop = scrollTop 
            }
         });
      };
      refs.forEach((ref) => {
         ref.current?.addEventListener('scroll', handleScroll);
      });
      return () => {
         refs.forEach((ref) => {
            ref.current?.removeEventListener('scroll', handleScroll);
         });
      };
   }, [refs]);
};
