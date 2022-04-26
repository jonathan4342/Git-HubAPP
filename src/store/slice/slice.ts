import { createSlice } from '@reduxjs/toolkit';
import { InitialJobs } from '../../interfaces/Interfaces';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState: InitialJobs = {
    jobs: [],
    jobsFilter: [],
    activeJob: null,
    searchJob: ''
}
export const jobsSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setJobs: (initialState, { payload }) => {
            initialState.jobs = payload;
            initialState.jobsFilter = payload
        },
        setActiveJob: (initialState, { payload }) => {
            initialState.activeJob = payload
        },
        searchJob: (initialState, { payload }) => {
            initialState.searchJob = payload;
        },
        searchJobs: (initialState) => {
            initialState.jobsFilter = initialState.jobs.filter(job => job.title.toLowerCase().includes(initialState.searchJob.toLowerCase()) || job.company_name.toLowerCase().includes(initialState.searchJob.toLowerCase()))
        },
        getFullTime: (initialState, { payload }) => {
            if (payload === 'on') {
                initialState.jobsFilter = initialState.jobs.filter(job => job.job_type === 'full_time')
            }
            else if(payload === 'off'){
                initialState.jobsFilter = initialState.jobs
            }
        },
        getCity: (initialState, { payload }) => {
            if(payload==='All'){
                initialState.jobsFilter = initialState.jobs
            }
            else{
                initialState.jobsFilter = initialState.jobs.filter(job => job.candidate_required_location.toLowerCase().includes(payload.toLowerCase()))
            }
        }
    }
})

export const { setJobs, setActiveJob, searchJob, searchJobs,getFullTime,getCity} = jobsSlice.actions;

export default jobsSlice.reducer;

export const getJobs = () => {
    return async function (dispatch: any) {
        const { data } = await axios.get(`https://remotive.io/api/remote-jobs`)
        return dispatch(setJobs(data.jobs))
    }
}

