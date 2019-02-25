import React, { Component } from 'react';

const NavBar = ()  =>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <div className="collapse navbar-collapse justify-content-md-center pr-4" id="navbarsExample08">
            <ul className="navbar-nav font-weight-bold">
                <li className='nav-item'>
                    <a className='navbar-brand' href="#">ManagerSys</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">Products</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Clients</a>
                </li>
            </ul>
        </div>
    </nav>

export default NavBar;