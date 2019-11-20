import React from 'react';
import { NavLink } from 'react-router-dom';
import copy from "../../copy";
import SlideToggle from 'react-slide-toggle';

class NavMenu extends React.Component {
    state = {
        collapseEvent: 0,
    };

    body = document.querySelector('body');

    collapseClickOnBody = e => {
        this.setState({
            collapseEvent: Date.now(),
        });
        this.body.removeEventListener('click', this.collapseClickOnBody);
    };

    render() {
        return (
            <ul className="nav-menu">
                { copy.English.menu.map(el => {
                    return <SlideToggle
                        key={ el.id }
                        duration={ 500 }
                        collapseEvent={ this.state.collapseEvent }
                        collapsed
                        render={ ({ toggle, setCollapsibleElement }) => (
                            <li
                                className='nav-menu-el'
                                onClick={ () => {
                                    if (Date.now() - this.state.collapseEvent > 20 && el.submenu) {
                                        this.body.addEventListener('click', this.collapseClickOnBody);
                                        toggle();
                                    } else {
                                        this.body.removeEventListener('click', this.collapseClickOnBody);
                                    }
                                } }
                            >
                                <NavLink
                                    to={ el.link }
                                    className={ this.props.color === 'white' && this.props.top ? 'nav-menu-link black' : 'nav-menu-link' }
                                    // onClick to avoid scrolling to top when dropping dropdown submenu
                                    onClick={(e) => {if (el.submenu) {e.preventDefault();}}}
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
                                                                backgroundImage: `url(${ require(`../../assets/slider-images/${ subEl.img }`) })`,
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
}


export default NavMenu
