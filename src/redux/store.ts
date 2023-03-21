import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import cartReducer from  './Cart/slice';

export const store = configureStore({
  reducer: {
    cartReducer
  },
})


export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;