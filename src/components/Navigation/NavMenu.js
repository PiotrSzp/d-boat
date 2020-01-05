import React from 'react';
import { NavLink } from 'react-router-dom';
import SlideToggle from 'react-slide-toggle';
import pl from "../../assets/img/polish.png";
import eng from "../../assets/img/english.png";

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
                <div className="language-change">
                    <img onClick={()=>this.props.language('polish')} className="polish" src={pl} alt='change to polish'/>
                    <img onClick={()=>this.props.language('english')} className="english" src={eng} alt='change to english'/>
                </div>
                <div className="nav-vertical-bar"/>
                { this.props.list.menu.map(el => {
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
                                    className='nav-menu-link'
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
                                                                backgroundImage: `url(${ require(`../../assets/models-submenu/${ subEl.img }`) })`,
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
