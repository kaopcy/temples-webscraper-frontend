import { create } from 'zustand';

interface IStore {
   timer: number;
   setTimer: (newTimer: number | ((old: number) => number)) => void;
}

const useStore = create<IStore>((set, get) => ({
   timer: 1,
   setTimer: (newTimer: number | ((old: number) => number)) => {
      if (typeof newTimer == 'function') {
         set((state) => ({ ...state, timer: newTimer(get().timer) }));
      } else {
         set((state) => ({ ...state, timer: newTimer }));
      }
   },
}));

const TestComponent = () => {
   const timer = useStore((state) => state.timer);
   const setTimer = useStore((state) => state.setTimer);

   return (
      <>
         <div className="h-20 w-20 rounded-md bg-white text-xl font-bold">{timer}</div>
         <div
            onClick={() => setTimer((old) => old + 1)}
            className="rounded-md bg-red-500 px-4 py-2"
         >
            set
         </div>
      </>
   );
};

export default TestComponent;
