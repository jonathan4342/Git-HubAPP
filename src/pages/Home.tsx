import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Jobs } from '../components/Jobs';
import { Navbar } from '../components/Navbar';
import { getCity, getFullTime, getJobs } from '../store/slice/slice'
import { RootState, useAppSelector } from '../store/store';
import { OpacityLoader } from '../components/Loaders';
import { BiWorld } from 'react-icons/bi';
import ReactPaginate from 'react-paginate';

export const Home = () => {
    

    const dispatch = useDispatch()
    const { jobsFilter } = useSelector((state: RootState) => state.jobsSlice);
    const [fullTime, setFullTime] = useState('on');
    const [currentPage, setCuerrentpage] = useState(1)
    const [jobsPorPage, setJobsPorPage] = useState(5)
    const [city, setCity] = useState('')
    const indexOfLastJob = currentPage * jobsPorPage;
    const indexOfFirstJob = indexOfLastJob - jobsPorPage;
    const currentJobs = jobsFilter.slice(indexOfFirstJob, indexOfLastJob);
    

    useEffect(() => {
        dispatch(getJobs())
    }, [dispatch]);
    useEffect(() => {
        dispatch(getCity(city))
    }, [dispatch, city]);

    const filterFullTIme = (e: any) => {
        if (e.target.value === 'on') {
            setFullTime('off')
            dispatch(getFullTime(fullTime))
        }
        else if (e.target.value === 'off') {
            setFullTime('on')
            dispatch(getFullTime(fullTime))
        }
    };
    const getLogation = (e: any) => {
        setCity(e.target.value)
    }
    console.log(currentJobs)
    
    return (
        <div className="container">
            <h2>Github <span>Jobs</span></h2>
            <Navbar />
            {

                jobsFilter.length <= 1 ? <OpacityLoader /> :
                    <div className='container-info_1'>
                        <div className='container-filtros'>
                            <label><input type="checkbox"
                                value={fullTime}
                                onChange={filterFullTIme}
                            /> Full Time</label>
                            <div className='filtros-1' >
                                <h3>Location</h3>
                                <div className='City'><BiWorld />City,state,zip code or country</div>
                            </div>
                            <form className='filtros-1' onChange={getLogation}>
                            <label><input type="radio"
                                value='All'
                                name='city'
                            />All</label>
                            <label><input type="radio"
                                value='USA Only'
                                name='city'
                            />USA Only</label>
                            <label><input type="radio"
                                value='worldwide'
                                name='city'
                            />worldwide</label>
                            <label><input type="radio"
                                value='UK'
                                name='city'
                            />UK</label>
                            <label><input type="radio"
                                value='Germany'
                                name='city'
                            />Germany</label>
                            </form>
                        </div>
                        <div className="container-card">
                            {
                                currentJobs.map(el => <Jobs key={el.id} {...el} />)
                            }

                        </div>
                    </div>
            }
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                pageCount={Math.ceil(jobsFilter.length/ jobsPorPage)}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                onPageChange={(e) => setCuerrentpage(e.selected)}
                containerClassName={'pagination justify-content-end'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
            />
        </div>
    )
}
