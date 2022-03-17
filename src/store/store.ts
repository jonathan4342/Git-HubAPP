import {configureStore} from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import jobsSlice from './slice/slice'
export const store= configureStore({
    reducer:{
        jobsSlice
    }
})

export type RootState= ReturnType<typeof store.getState>

export const useAppSelector=()=>useSelector((state:RootState)=>state)