import React, { useState } from 'react'
import {RiSuitcaseLine} from 'react-icons/ri'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchJob, searchJobs } from '../store/slice/slice';
export const Navbar = () => {

    const [search,setSearch]=useState('')
    
    const dispatch=useDispatch()

    const nameJobs=(e:any) =>{
        setSearch(e.target.value)
    }
    useEffect(()=>{
        dispatch(searchJob(search))
    },[dispatch,search])

    const SearchJobs1 =() =>{
        dispatch(searchJobs())
    }
    return (
        <>  
            <div className="navbar">
                <div className="navbar-input">
                <RiSuitcaseLine className="navbar-icon"/>
                <input type="text"
                    placeholder="Title, companies, expertise or benefits"
                    className="input" 
                    value={search}
                    onChange={nameJobs}/>
                <button onClick={SearchJobs1}>Search</button>
                </div>
            </div>
        </>

    )
}
