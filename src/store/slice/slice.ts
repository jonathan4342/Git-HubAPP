import { createSlice } from '@reduxjs/toolkit';
import { InitialJobs } from '../../interfaces/Interfaces';
import axios from 'axios';

const initialState: InitialJobs = {
    jobs: [],
    jobsFilter:[],
    activeJob:null,
    searchJob:''
}
export const jobsSlice = createSlice({
    name: 'root',
    initialState,
// activeJob p
    reducers: {
        setJobs: (initialState, {payload}) => {
            initialState.jobs = payload;
            initialState.jobsFilter= payload
        },
        setActiveJob: (initialState, {payload}) => {
            initialState.activeJob = payload
        },
        searchJob:(initialState,{payload}) => {
            initialState.searchJob = payload
        }
    }
})

export const { setJobs ,setActiveJob,searchJob} = jobsSlice.actions;

export default jobsSlice.reducer;

export const getJobs = () => {
    return async function (dispatch:any){
        const {data}= await axios.get(`https://remotive.io/api/remote-jobs`)
        return dispatch(setJobs(data.jobs))
    }
}

