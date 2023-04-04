import { createContext, useContext, useState } from 'react';
import { StoreApi, UseBoundStore, create } from 'zustand';
import { CodeBlockBuilder, CodeLine } from '../utils/CodeBlockBuilder';

export interface IStore {
   codeBlock: CodeBlockBuilder;
   selectedLine: number | null;
   setSelectedLine: (lineNumber: number) => void;
   getSelectedCodeLine: ()=> CodeLine | null
}

export const CodeBlockStoreContext = createContext<UseBoundStore<StoreApi<IStore>> | undefined>(undefined);

export const CodeBlockStore: React.FC<{
   children: React.ReactNode;
   codeBlock: CodeBlockBuilder;
}> = ({ children, codeBlock }) => {
   const [useStore] = useState(() =>
      create<IStore>((set,get) => ({
         codeBlock,
         selectedLine: null,
         setSelectedLine: (lineNumber) => set((state) => ({ ...state, selectedLine: lineNumber })),
         getSelectedCodeLine: ()=> {
            const selectedLine = get().selectedLine
            if(selectedLine) return get().codeBlock.getLine(selectedLine)
            return null
         }
      })),
   );

   return (
      <CodeBlockStoreContext.Provider value={useStore}>{children}</CodeBlockStoreContext.Provider>
   );
};
