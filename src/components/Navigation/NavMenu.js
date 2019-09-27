import React from 'react';
import copy from "../../copy";

function NavMenu() {
    return (
        <ul className="nav-menu">
            {copy.English.menu.map((el, i) => {
                return <li key={el.id} className='nav-menu-el'><a href={el.link} className='nav-menu-link'>{el.text}</a>
                </li>
            })}
        </ul>
    )
}


export default NavMenu