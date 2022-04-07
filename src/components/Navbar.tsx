import React, { useState } from 'react'
import {RiSuitcaseLine} from 'react-icons/ri'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchJob } from '../store/slice/slice';
export const Navbar = () => {

    const [search,setSearch]=useState('')
    
    const dispatch=useDispatch()


    const nameJobs=(e:any) =>{
        setSearch(e.target.value)
        
    }

    const SearchJobs =() =>{
        dispatch(searchJob(search))
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
                <button onClick={SearchJobs}>Search</button>
                </div>
            </div>
        </>

    )
}
