import { useContext } from 'react';
import { CodeBlockStoreContext, IStore } from '../contexts/CodeBlockStore';
/** using zustand instead of context to avoid unnessesary rerender, more intuitive :D */

export const useCodeBlock = () => {
   const state = useContext(CodeBlockStoreContext);
   if (!state) throw new Error('')
   return state;
};
