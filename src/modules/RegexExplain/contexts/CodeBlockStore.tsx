import { createContext, useContext, useState } from 'react';
import { StoreApi, UseBoundStore, create } from 'zustand';
import { CodeBlockBuilder, CodeLine } from '../utils/CodeBlockBuilder';

export interface IStore {
   codeBlock: CodeBlockBuilder;
   selectedLine: number | null;
   selectedDataZone: string | null;
   setSelectedLine: (lineNumber: number) => void;
   setSelectedZone: (newZone: string) => void;
   getSelectedCodeLine: () => CodeLine | null;
}

export const CodeBlockStoreContext = createContext<UseBoundStore<StoreApi<IStore>> | undefined>(
   undefined,
);

export const CodeBlockStore: React.FC<{
   children: React.ReactNode;
   codeBlock: CodeBlockBuilder;
   startLine: number;
}> = ({ children, codeBlock, startLine }) => {
   const [useStore] = useState(() =>
      create<IStore>((set, get) => ({
         codeBlock,
         selectedLine: startLine,
         selectedDataZone: `${codeBlock.getName()}-${codeBlock
            .getLine(codeBlock.getStartLineNumber())
            .getZone()}`,
         setSelectedLine: (lineNumber) => set((state) => ({ ...state, selectedLine: lineNumber })),
         setSelectedZone: (newZone: string) =>
            set((state) => ({ ...state, selectedDataZone: newZone })),
         getSelectedCodeLine: () => {
            const selectedLine = get().selectedLine;
            if (selectedLine) return get().codeBlock.getLine(selectedLine);
            return null;
         },
      })),
   );

   return (
      <CodeBlockStoreContext.Provider value={useStore}>{children}</CodeBlockStoreContext.Provider>
   );
};
