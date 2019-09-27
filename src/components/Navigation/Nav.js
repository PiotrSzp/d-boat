import React from 'react';
import copy from "../../copy";
import NavMenu from "./NavMenu";
import Burger from "./BurgerMenu";

function Nav() {
    return (
        <nav className='nav'>
            <div className='wrapper nav-wrapper'>
                <a href="/" className="nav-logo">
                </a>
                <Burger list={copy.English.menu}/>
                <NavMenu/>
            </div>
        </nav>
    )
}


export default Nav