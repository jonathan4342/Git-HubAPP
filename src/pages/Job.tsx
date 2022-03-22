import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../store/store'

export const Job = () => {

    const id =useParams().id
    const [info,setInfo]=useState()
    
    const { jobs } = useSelector((state: RootState) => state.jobsSlice)

    useEffect(() => {

    }, [id])
    
    return (
        <div>{id}</div>
    )
}
