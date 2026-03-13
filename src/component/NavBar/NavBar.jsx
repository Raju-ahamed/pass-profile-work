import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../Auth/AuthContext';

const NavBar = () => {
    const { users, sginOutUser } = use(AuthContext);
    
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/signup">Sign Up</NavLink></li>
        {
            users && <>
                <li><NavLink to="/profile">profile</NavLink></li>
                <li><NavLink to="/deshboard">Deshboard</NavLink></li>
            </>
        }

    </>
  
    const handleSginOut = ()=>{
        sginOutUser().then(()=>{}).catch(()=>{});
    }

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    users ? <><p>{users.email}</p>
                        <button onClick={handleSginOut} className='ml-2'><NavLink to="/">Sign out</NavLink></button>

                    </> :
                        <button><NavLink to="/login">Sign in</NavLink></button>
                }
            </div>
        </div>
    );
};

export default NavBar;