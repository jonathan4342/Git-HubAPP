import {BiWorld} from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { JobsProps } from '../interfaces/Interfaces'
import { setActiveJob } from '../store/slice/slice'

export const Jobs = (props: JobsProps) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const click =()=>{
        dispatch(setActiveJob(props))
        navigate('/job')
    }
    return (
        <div className="container-card_job" onClick={click}>
            <div className='card-img'>
                <img src={props.company_logo} alt="img" width="90px" height="90px" />
            </div>
            <div className='card-info'>
                <div className='card-info_1'>
                    <h5>{props.company_name}</h5>
                    <h3>{props.title}</h3>
                    {
                        props.job_type !== '' &&
                        <button className='btnJobs'>{
                            props.job_type === 'full_time' ? 'Full time' : 'Contract'
                        }</button>
                    }
                </div>
                <div className='card-info_2'>
                    <span><BiWorld/> {props.candidate_required_location}</span>
                </div>
            </div>
        </div>
    )
}
