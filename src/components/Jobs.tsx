import {BiWorld} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { JobsProps } from '../interfaces/Interfaces'

export const Jobs = (props: JobsProps) => {

    return (
        <div className="container-card_job">
            <div className='card-img'>
                <Link to={`/jobs/${props.id}`}>
                <img src={props.company_logo} alt="img" width="90px" height="90px" />
                </Link>
            </div>
            <div className='card-info'>
                <div className='card-info_1'>
                    <h5>{props.company_name}</h5>
                    <h3>{props.title}</h3>
                    {
                        props.job_type !== '' &&
                        <button>{
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
