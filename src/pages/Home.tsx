import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Jobs } from '../components/Jobs';
import { Navbar } from '../components/Navbar'
import { getFullTime, getJobs } from '../store/slice/slice'
import { RootState } from '../store/store';

export const Home = () => {

    const dispatch = useDispatch()
    const { jobsFilter } = useSelector((state: RootState) => state.jobsSlice)
    const [fullTime, setFullTime] = useState('on')

    useEffect(() => {
        dispatch(getJobs())
    }, [dispatch])

    const click = (e: any) => {
        if(e.target.value === 'on'){
            setFullTime('off')
            dispatch(getFullTime(fullTime))
        }
        else if(e.target.value === 'off'){
            setFullTime('on')
            dispatch(getFullTime(fullTime))
        }
        }
    let  inputCheckbox = jobsFilter.map(el=>el.candidate_required_location);
    inputCheckbox= inputCheckbox.filter((valor,index)=>inputCheckbox.indexOf(valor)===index);
    console.log(inputCheckbox);
    
        return (
            <div className="container">
                <h2>Github <span>Jobs</span></h2>
                <Navbar />
                <div className='container-info_1'>
                    <div className='container-filtros'>
                        <label><input type="checkbox"
                            value={fullTime}
                            onChange={click}
                        /> Full Time</label>
                        <div className='filtros-1'>
                            <h3>Location</h3>
                            <input type="text"
                                placeholder="City"
                                className='place' />
                        </div>
                        {
                            inputCheckbox.map(el=><label key={el}><input type="checkbox"/>{el}</label>)
                        }
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
