import React, { useEffect, useRef, useState } from 'react';

type Effect<T> = (e: React.ChangeEvent<T>) => void;
type OnChage<T> = React.ChangeEventHandler<T>;

function useDelayOnChange<T>(
   effect: Effect<T>,
   delay: number,
): {
   onChange: OnChage<T>;
   isDebouncing: boolean;
} {
   const [isDebouncing, setIsDebouncing] = useState<boolean>(false);
   const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
   const onChange: React.ChangeEventHandler<T> = (e) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsDebouncing(true);
      timeoutRef.current = setTimeout(() => {
         setIsDebouncing(false);
         effect(e);
      }, delay);
   };

   useEffect(() => {
      return () => {
         setIsDebouncing(false);
         if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
         }
      };
   }, []);

   return { onChange, isDebouncing };
}

export default useDelayOnChange;
