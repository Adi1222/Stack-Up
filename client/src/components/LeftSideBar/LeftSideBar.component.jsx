import React from 'react';
import { NavLink } from 'react-router-dom';

//import { ReactComponent as GlobalIcon } from '../../assets/icons/Globe.svg'
import './LeftSideBar.css'

const LeftSideBar = () => {
    return(
    <div className='side-bar-container' >
        <div className='side-bar-tabs'>
            <NavLink activeClassName='active' className='link nav_link' to='/questions'>
                <p>
                    StacK Up
                </p>
            </NavLink>

            <NavLink activeClassName='active' className='link nav_link'  to='/tags'>
                <p>Tags</p>
            </NavLink>

            <NavLink activeClassName='active' className='link nav_link' to='/users'>
                <p>Users</p>
            </NavLink>

        </div>
    </div>
    )
}

export default LeftSideBar;