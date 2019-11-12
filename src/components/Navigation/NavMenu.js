import React from 'react';
import { NavLink } from 'react-router-dom';
import copy from "../../copy";
import SlideToggle from 'react-slide-toggle';

function NavMenu() {
    return (
        <ul className="nav-menu">
            { copy.English.menu.map(el => {
                return <SlideToggle
                    key={ el.id }
                    duration={ 500 }
                    collapsed
                    render={ ({ toggle, setCollapsibleElement }) => (
                        <li
                            className='nav-menu-el'
                            onClick={ toggle }
                        >
                            <NavLink
                                to={ el.link }
                                className='nav-menu-link'
                            >
                                { el.text }
                            </NavLink>
                            {
                                el.submenu ? <ul
                                    ref={ setCollapsibleElement }
                                    className='nav-menu-submenu'
                                >
                                    {
                                        el.submenu.map(subEl => {
                                            return (
                                                <li
                                                    key={ subEl.id }
                                                    className='nav-menu-subel'
                                                >
                                                    <NavLink
                                                        to={ subEl.link }
                                                        className='nav-menu-sublink'
                                                        style={ {
                                                            // zeby to działało, chyba trzeba zamknąć cały element menu w komponencie i przekazać ścieżkę do propsa
                                                            backgroundImage: `url(${ require('../../assets/slider-images/sample-boat-slide.png') })`,
                                                            // backgroundImage: `url(${  })`,
                                                        } }
                                                    >
                                                        { subEl.text }
                                                    </NavLink>
                                                </li>
                                            )
                                        })
                                    }
                                </ul> : null
                            }
                        </li>
                    ) }
                />
            }) }
        </ul>
    )
}

export default NavMenu