import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/store';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { MdOutlineWatchLater } from 'react-icons/md'
import {BiWorld} from 'react-icons/bi'

export const Job = () => {

    const { activeJob } = useAppSelector().jobsSlice
    const navigate = useNavigate()
    console.log(activeJob?.description);
    return (
        <div className='container-job'>
            <div className='job-info_1'>
                <h2>Github <span>Jobs</span></h2>
                <button onClick={() => navigate(-1)} className='btnJob'><HiOutlineArrowNarrowLeft /> Back to search</button>
                <h4>HOW TO APPLY</h4>
                <h3 className='email'>
                    Please email a copy of your resume and online portfolio to <span className='emailspan'>wes{activeJob?.company_name}com</span> or CC <span  className='emailspan'>eric@{activeJob?.company_name}com</span>
                </h3>
            </div>
            <div className='job-info_2'>
                <div className='job-1'>
                    <div className='jobSub-1'>
                        <div className='jobSub1'>
                            <h2>{activeJob?.title}</h2>
                        </div>
                        <div className='jobSub2'>
                            {
                                activeJob?.job_type !== '' &&
                                <button className='btnJobs'>{
                                    activeJob?.job_type === 'full_time' ? 'Full time' : 'Contract'
                                }</button>
                            }
                        </div>
                    </div>
                    <div className='job-2'>
                        <h4><MdOutlineWatchLater /> Fecha </h4>
                    </div>
                </div>
                <div className='jobSub-2'>
                    <div className='imgLogo'>
                            <img src={activeJob?.company_logo} alt="Logo" width='42px' height='42px'/>
                    </div>
                    <div className='jobSub3'>
                            <span className='nameCompanySpan'>{activeJob?.company_name}</span>
                            <span className='locationSpan'><BiWorld/> {activeJob?.candidate_required_location}</span>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: activeJob?.description as string}}/>
            </div>
        </div>
    )
}

