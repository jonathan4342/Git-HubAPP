import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Jobs } from '../components/Jobs';
import { Navbar } from '../components/Navbar'
import { getJobs } from '../store/slice/slice'
import { RootState } from '../store/store';
import { JobsProps } from '../interfaces/Interfaces';

export const Home = () => {

    const dispatch = useDispatch()
    const { jobs,searchJob,jobsFilter} = useSelector((state: RootState) => state.jobsSlice)

    const [filterJobs,setFilterJobs]=useState<JobsProps []>([])

    useEffect(() => {
        dispatch(getJobs())
    }, [])


    useEffect(()=>{
        setFilterJobs(jobsFilter)
    },[filterJobs])

    useEffect(() => {
        setFilterJobs(jobs.filter(el=>(el.title.toLowerCase().includes(searchJob.toLowerCase()))))
    },[searchJob])

    return (
        <div className="container">
            <h2>Github <span>Jobs</span></h2>
            <Navbar />
            <div className='container-info_1'>
                <div className='container-filtros'>
                    <label><input type="checkbox" /> Full Time</label>
                    <div className='filtros-1'>
                        <h3>Location</h3>
                        <input type="text"
                            placeholder="City"
                            className='place' />
                    </div>
                    <label><input type="checkbox" /> option</label>
                    <label><input type="checkbox" /> option</label>
                    <label><input type="checkbox" /> option</label>
                </div>
                <div className="container-card">
                        {
                            filterJobs.map(el => <Jobs key={el.id} {...el} />)
                        }
                </div>
            </div>
        </div>
    )
}
