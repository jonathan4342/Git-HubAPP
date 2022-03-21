import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from '../pages/Home';
import { Job } from '../pages/Job';
export const RoutesApp = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/jobs/:id' element={<Job/>}/>
            </Routes>
        </Router>
    )
}
