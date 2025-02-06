import React from 'react';
import { Link, NavLink} from "react-router-dom";

const Header = () => {
  return (
    <header>

<div className="header">
        <div className='container'>
            <div className='logo'>
                <Link to="/">
                    Movies
                </Link>

            </div>
            <ul className='nav-links'>
                <li>
                  <NavLink to="/">Watch list</NavLink>
                </li>
                <li>
                  <NavLink to="/watched">Watched</NavLink>
                </li>
                <li>
                  <NavLink to="/add" className='btn'>Add</NavLink>
                </li>

            </ul>
             
        </div>
    </div>

    </header>
    
  )
}

export default Header