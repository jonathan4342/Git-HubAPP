import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/store';

export const Job = () => {

    const { activeJob } = useAppSelector().jobsSlice
    const navigate = useNavigate()
    console.log(activeJob?.description);
    return (
        <div className='container-job'>
            <div className='job-info_1'>
                <h2>Github <span>Jobs</span></h2>
                <button onClick={() => navigate(-1)}> Back to search</button>
                <h4>HOW TO APPLY</h4>
            </div>
            {/* <div className='job-info_2'>
                <div dangerouslySetInnerHTML={{ __html: activeJob?.description }}/>
            </div> */}
        </div>
    )
}

