import { create } from 'zustand';

interface ModeSlice {
   mode: boolean;
   toggleMode: () => void;
   exitFullScreen: () => void;
   enterFullScreen: () => void;
}

export const useMode = create<ModeSlice>((set, get) => ({
   mode: false,
   toggleMode: () => {
      set((state) => ({ ...state, mode: !get().mode }));
   },
   exitFullScreen: () => {
      set((state) => ({ ...state, mode: false }));
   },
   enterFullScreen: () => {
      set((state) => ({ ...state, mode: true }));
   },
}));
