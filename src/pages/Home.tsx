import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Jobs } from '../components/Jobs';
import { Navbar } from '../components/Navbar'
import { getJobs } from '../store/slice/slice'
import { RootState } from '../store/store';

export const Home = () => {

    const dispatch=useDispatch()
    const {jobs}=useSelector((state:RootState)=>state.jobsSlice)
    useEffect(()=>{
        dispatch(getJobs())
        console.log(jobs);
        
    },[])

    return (
        <div className="container">
            <h2>Github <span>Jobs</span></h2>
            <Navbar/>
            <div className='container-info_1'>
                <aside>
                    aqui van los filtros
                </aside>
                <div className="container-card">
                    {
                        jobs.map(el=><Jobs publication_date={el.publication_date}candidate_required_location={el.candidate_required_location}key={el.id}title={el.title} job_type={el.job_type} company_logo={el.company_logo} company_name={el.company_name}/>)
                    }
                </div>
            </div>
        </div>
    )
}
