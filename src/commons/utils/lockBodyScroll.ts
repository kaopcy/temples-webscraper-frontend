export const lockBodyScroll = {
   lock: () => {
      if (!window) return;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
   },
   unlock: () => {
      if (!window) return;
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
   },
};
