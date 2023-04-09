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

const ModalLayout = forwardRef<IModalHandler, { children: React.ReactNode }>(
   ({ children }, ref) => {
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
         document.body.style.overflow = 'auto';
         setIsOpen(false);
      };
      const open = () => {
         document.body.style.overflow = 'hidden';
         setIsOpen(true);
      };
      const toggle = () => {
         setIsOpen((e) => {
            if (e) {
               document.body.style.overflow = 'auto';
            } else {
               document.body.style.overflow = 'hidden';
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
                       {children}
                    </>
                 )}
              </AnimatePresence>,
              portalRef.current,
           )
         : null;
   },
);

export default ModalLayout;
