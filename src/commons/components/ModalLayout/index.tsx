import { lockBodyScroll } from '@/utils/lockBodyScroll';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useState, useImperativeHandle, forwardRef, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

export interface IModalHandler {
   open: () => void;
   close: () => void;
   toggle: () => void;
   active: boolean;
}

const OverlayVariant: Variants = {
   initial: {
      opacity: 0,
   },
   animate: {
      opacity: 1,
      transition: {
         duration: 0.3,
      },
   },
   exit: {
      opacity: 0,
      transition: {
         duration: 0.3,
      },
   },
};

const ModalLayout = forwardRef<
   IModalHandler,
   { children: React.ReactNode | ((handler: Omit<IModalHandler, 'active'>) => React.ReactNode) }
>(({ children }, ref) => {
   const [isOpen, setIsOpen] = useState(false);

   useImperativeHandle(
      ref,
      (): IModalHandler => ({
         active: isOpen,
         close,
         open,
         toggle,
      }),
   );

   const close = () => {
      lockBodyScroll.unlock();
      setIsOpen(false);
   };
   const open = () => {
      lockBodyScroll.lock();
      setIsOpen(true);
   };
   const toggle = () => {
      setIsOpen((e) => {
         if (e) {
            lockBodyScroll.unlock();
         } else {
            lockBodyScroll.lock();
         }

         return !e;
      });
   };

   const portalRef = useRef<Element | null>(null);
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      portalRef.current = document.querySelector<HTMLElement>('#portal');
      setMounted(true);
   }, []);

   return mounted && portalRef.current
      ? createPortal(
           <AnimatePresence mode="wait">
              {isOpen && (
                 <>
                    <motion.div
                       onClick={close}
                       variants={OverlayVariant}
                       animate="animate"
                       initial="initial"
                       exit="exit"
                       className="fixed inset-0 z-0 bg-[#00000099]"
                    ></motion.div>
                    {typeof children == 'function' ? children({ close, open, toggle }) : children}
                 </>
              )}
           </AnimatePresence>,
           portalRef.current,
        )
      : null;
});

export default ModalLayout;
