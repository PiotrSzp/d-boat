import React from 'react';

function Nav() {
    return (
        <nav className='nav'>
            <div className='wrapper nav-wrapper'>
                <a href="/" className="nav-logo">
                </a>
                <div className="nav-menu">
                    <li className='nav-menu-el'><a href="#" className='nav-menu-link'>Model</a></li>
                    <li className='nav-menu-el'><a href="#" className='nav-menu-link'>About</a></li>
                    <li className='nav-menu-el'><a href="#" className='nav-menu-link'>Find My dealer</a></li>
                </div>
            </div>
        </nav>
    )
}


export default Nav