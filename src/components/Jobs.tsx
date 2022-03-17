import React from 'react'
import { JobsProps } from '../interfaces/Interfaces'

export const Jobs = (props: JobsProps) => {

    return (
        <div className="container-card_job">
            <div className='card-img'>
                <img src={props.company_logo} alt="img" width="90px" height="90px" />
            </div>
            <div className='card-info'>
                <div className='card-info_1'>
                    <h5>{props.company_name}</h5>
                    <h3>{props.title}</h3>
                    <button>{props.job_type}</button>
                </div>
                <div className='card-info_2'>
                    <span>{props.publication_date}</span>
                    <span>{props.category}</span>
                </div>
            </div>
        </div>
    )
}
