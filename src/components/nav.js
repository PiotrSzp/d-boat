import React from 'react';

function Nav() {
    return (
        <nav className='nav'>
            <div className='wrapper nav-wrapper'>
                <a href="/" className="nav-logo">
                    <img src="../img/D-Boat_logo.png" alt="logo"/>
                </a>
                <div className="nav-menu">
                    <li className='nav-menu-el'><a href="#" className='nav-menu-link'>Model</a></li>
                    <li className='nav-menu-el'><a href="#" className='nav-menu-link'>About</a></li>
                    <li className='nav-menu-el'><a href="#" className='nav-menu-link'>Where to buy?</a></li>
                </div>
            </div>
        </nav>
    )
}


export default Nav