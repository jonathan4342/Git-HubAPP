import { Link } from 'react-router-dom';
import { useAppSelector } from '../store/store';

export const Job = () => {

    const { activeJob } = useAppSelector().jobsSlice
    
    return (
        <div className='container-job'>
            <div className='job-info_1'>
                <h2>Github <span>Jobs</span></h2>
                <button> Back to search</button>
                <h4>HOW TO APPLY</h4>
                <div>
                    
                </div>
            </div>
            <div></div>
            
        </div>

    )
}

