import React from 'react'
import {RiSuitcaseLine} from 'react-icons/ri'
export const Navbar = () => {
    return (
        <>  
            <div className="navbar">
                <div className="navbar-input">
                <RiSuitcaseLine className="navbar-icon"/>
                <input type="text"
                    placeholder="Title, companies, expertise or benefits"
                    className="input" />
                <button>Search</button>
                </div>
            </div>
        </>

    )
}
