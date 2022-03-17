import React from 'react'

export const Jobs = ({ title, company_logo,publication_date, company_name, job_type, candidate_required_location}: { publication_date:string; candidate_required_location:string ,job_type: string, title: string, company_logo: string, company_name: string }) => {

    return (
        <div className="container-card_job">
            <div className='card-img'>
                <img src={company_logo} alt="img" width="90px" height="90px" />
            </div>
            <div className='card-info'>
                <div className='card-info_1'>
                    <h5>{company_name}</h5>
                    <h3>{title}</h3>
                    <button>{job_type}</button>
                </div>
                <div className='card-info_2'>
                    <span>{candidate_required_location}</span>
                    <span>{publication_date}</span>
                </div>
            </div>
        </div>
    )
}
