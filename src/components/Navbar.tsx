import React, { useState } from 'react'
import {RiSuitcaseLine} from 'react-icons/ri'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchJob } from '../store/slice/slice';
export const Navbar = () => {

    const [search,setSearch]=useState('')
    
    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(searchJob(search))
    }, [search])

    const nameJobs=(e:any) =>{
        setSearch(e.target.value)
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
                <button>Search</button>
                </div>
            </div>
        </>

    )
}
