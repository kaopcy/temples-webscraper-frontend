/** redux staff */
import * as toolkit from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';

import rootReducer from './rootReducer';

/** nextjs wrapper */
import { HYDRATE, createWrapper } from 'next-redux-wrapper';

const createStore = () => {
   const store = toolkit.configureStore({
      reducer: rootReducer,
   });
   return store;
};

const store = createStore();

type AppStore = ReturnType<typeof createStore>;
type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useDispatch = () => useAppDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

export { store };

export const wrapper = createWrapper<AppStore>(createStore);
