import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../store/store';

export const Job = () => {

    const { activeJob } = useAppSelector().jobsSlice

    return (
        <pre>
            {
                JSON.stringify(activeJob,null,4)
            }
        </pre>
    )
}

