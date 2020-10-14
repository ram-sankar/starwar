import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg  navbar-light bg-orange justify-content-between">
            <Link className="navbar-brand" to="/home">Star War</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <NavLink className="nav-link" to="/home">Home</NavLink>
                    <NavLink className="nav-link" to="/history">My Games</NavLink>
                    <NavLink className="nav-link" to="/multi-player">Multi Players</NavLink>
                    <NavLink className="nav-link" to="/profile">Profile</NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;