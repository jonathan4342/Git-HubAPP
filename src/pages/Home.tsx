import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Jobs } from '../components/Jobs';
import { Navbar } from '../components/Navbar'
import { getJobs } from '../store/slice/slice'
import { RootState } from '../store/store';

export const Home = () => {

    const dispatch = useDispatch()
    const {jobsFilter} = useSelector((state: RootState) => state.jobsSlice)


    useEffect(() => {
        dispatch(getJobs())
    }, [dispatch])




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
                            jobsFilter.map(el => <Jobs key={el.id} {...el} />)
                        }
                </div>
            </div>
        </div>
    )
}
