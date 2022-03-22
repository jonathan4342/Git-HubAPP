import { createSlice } from '@reduxjs/toolkit';
import { InitialJobs } from '../../interfaces/Interfaces';
import axios from 'axios';

const initialState: InitialJobs = {
    jobs: [],
}
export const jobsSlice = createSlice({
    name: 'root',
    initialState,

    reducers: {
        setJobs: (initialState, action) => {
            initialState.jobs = action.payload;
        },
    }
})

export const { setJobs } = jobsSlice.actions;

export default jobsSlice.reducer;

export const getJobs = () => {
    return async function (dispatch:any){
        const {data}= await axios.get(`https://remotive.io/api/remote-jobs`)
        return dispatch(setJobs(data.jobs))
    }
}

