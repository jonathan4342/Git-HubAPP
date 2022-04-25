import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Jobs } from '../components/Jobs';
import { Navbar } from '../components/Navbar';
import { getFullTime, getJobs } from '../store/slice/slice'
import { RootState } from '../store/store';
import { OpacityLoader } from '../components/Loaders';
import { BiWorld } from 'react-icons/bi';

export const Home = () => {

    const dispatch = useDispatch()
    const { jobsFilter } = useSelector((state: RootState) => state.jobsSlice);
    const [fullTime, setFullTime] = useState('on');
    const [input, setInput] = useState('all')

    useEffect(() => {
        dispatch(getJobs())
    }, [dispatch]);

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
    // console.log(input);

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
                            <div className='filtros-1'>
                                <h3>Location</h3>
                                <div className='City'><BiWorld />City,state,zip code or country</div>
                            </div>
                            <label><input type="radio"
                                value='London'

                            />London</label>
                            <label><input type="radio"
                                value='Amsterdam'
                            />Amsterdam</label>
                            <label><input type="radio"
                                value='New York'
                            />New York</label>
                            <label><input type="radio"
                                value='Berlin'
                            />Berlin</label>
                        </div>
                        <div className="container-card">
                            {
                                jobsFilter.map(el => <Jobs key={el.id} {...el} />)
                            }
                        </div>
                    </div>
            }
        </div>
    )
}
