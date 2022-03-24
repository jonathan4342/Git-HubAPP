import {configureStore} from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import jobsSlice from './slice/slice'
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store= configureStore({
    reducer:{
        jobsSlice,
    }
})

export type RootState= ReturnType<typeof store.getState>

export const useAppSelector=()=>useSelector((state:RootState)=>state)

setupListeners(store.dispatch)