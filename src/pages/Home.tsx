import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Jobs } from '../components/Jobs';
import { Navbar } from '../components/Navbar'
import { getJobs } from '../store/slice/slice'
import { RootState } from '../store/store';

export const Home = () => {

    const dispatch = useDispatch()
    const { jobs } = useSelector((state: RootState) => state.jobsSlice)
    useEffect(() => {
        dispatch(getJobs())

    }, [])

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
                        jobs.map(el => <Link to='/jobs/id' key={el.id}><Jobs key={el.id} {...el} /></Link>)
                    }
                </div>
            </div>
        </div>
    )
}
