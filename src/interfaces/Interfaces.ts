
export interface JobsProps {
    id:number;
    title:string;
    company_name:string;
    company_logo:string;
    category:string;
    job_type:string;
    candidate_required_location:string;
    description:undefined| string;
    publication_date:string;
    diasTranscurridos:number;

}

export interface InitialJobs {
    jobs:JobsProps[];
    jobsFilter:JobsProps[];
    activeJob:JobsProps | null;
    searchJob:string;

}

