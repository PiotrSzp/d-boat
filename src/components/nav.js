import React from 'react';
import ReactDOM from 'react-dom';

function Nav() {
    return (
        <nav className='nav'>
            <div className='wrapper'>
                <a href="/" className="nav-logo">
                    <img src="" alt=""/>
                </a>
                <div className="nav-menu">
                    <li className='nav-menu-el'><a href="#" className='nav-menu-link'></a></li>
                    <li className='nav-menu-el'><a href="#" className='nav-menu-link'></a></li>
                    <li className='nav-menu-el'><a href="#" className='nav-menu-link'></a></li>
                </div>
            </div>
        </nav>
    )
}


export default Nav