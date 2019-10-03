import React from 'react';
import { NavLink } from 'react-router-dom';
import copy from "../../copy";

function NavMenu() {
    return (
        <ul className="nav-menu">
            {copy.English.menu.map((el, i) => {
                return <li key={el.id} className='nav-menu-el'><NavLink to={el.link} className='nav-menu-link'>{el.text}</NavLink>
                </li>
            })}
        </ul>
    )
}


export default NavMenu