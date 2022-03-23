import { createSlice } from '@reduxjs/toolkit';
import { InitialJobs } from '../../interfaces/Interfaces';
import axios from 'axios';

const initialState: InitialJobs = {
    jobs: [],
    activeJob:null
}
export const jobsSlice = createSlice({
    name: 'root',
    initialState,
// activeJob p
    reducers: {
        setJobs: (initialState, action) => {
            initialState.jobs = action.payload;
        },
        setActiveJob: (initialState, {payload}) => {
            initialState.activeJob = payload
        }
    }
})

export const { setJobs ,setActiveJob} = jobsSlice.actions;

export default jobsSlice.reducer;

export const getJobs = () => {
    return async function (dispatch:any){
        const {data}= await axios.get(`https://remotive.io/api/remote-jobs`)
        return dispatch(setJobs(data.jobs))
    }
}

