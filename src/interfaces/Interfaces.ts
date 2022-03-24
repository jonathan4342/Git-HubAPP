
export interface JobsProps {
    id:number;
    title:string;
    company_name:string;
    company_logo:string;
    category:string;
    job_type:string;
    candidate_required_location:string;
    description:string;
    publication_date:string;

}

export interface InitialJobs {
    jobs:JobsProps[];
    jobsFilter:[];
    activeJob:JobsProps | null;
    searchJob:string;

}

