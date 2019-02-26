import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';

const NavBar = ()  =>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse justify-content-md-center pr-4" id="navbarsExample08">
            <ul className="navbar-nav font-weight-bold">
                <li className='nav-item'>
                    <Link to='/' className='navbar-brand'>ManagerSys</Link>
                </li>
                <li className="nav-item">
                    <NavLink to='/products' className="nav-link">Products</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/clients' className="nav-link">Clients</NavLink>
                </li>
            </ul>
        </div>
    </nav>

export default NavBar;