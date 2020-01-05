import React from 'react';
import { NavLink } from 'react-router-dom';
import SlideToggle from 'react-slide-toggle';
import pl from "../../assets/img/polish.png";
import eng from "../../assets/img/english.png";


class Burger extends React.Component {
    state = {
        isOn: false
    };

    handleOnClick = () => {
        this.props.switcher();
        this.setState(prev=>({
          isOn: !prev.isOn
      }))
    };

    handleOnLink = () => {
        this.props.switcher();
        this.setState(prev => ({
            isOn: false
        }))
    };

    render() {
        return (
            <>
                {/*Burger*/ }
                <button onClick={ this.handleOnClick }
                        className={ `burger-menu ${ this.state.isOn ? 'burger-active' : null }` }>
                    <div className='burger-line'/>
                    <div className='burger-line'/>
                    <div className='burger-line'/>
                </button>
                {/*Slide Menu*/ }
                { this.state.isOn ? <ul className='burger-list'>
                    { this.props.list.map(el => {
                        // if element HAS NO submenu
                        if (!el.submenu) {
                            return (
                                <li
                                    onClick={ this.handleOnLink }
                                    key={ el.id }
                                    className='burger-el'
                                >
                                    <NavLink
                                        to={ el.link }
                                        className='burger-link'
                                    >
                                        { el.text }
                                    </NavLink>
                                </li>
                            )
                        } else {
                            // if element HAS submenu
                            return (<SlideToggle
                                collapsed
                                duration={ 500 }
                                key={ el.id }
                                render={ ({ toggle, setCollapsibleElement }) => (
                                    <li
                                        onClick={ () => {
                                            // this.handleOnLink();
                                            toggle();
                                        } }
                                        key={ el.id }
                                        className='burger-el dropdown'
                                    >
                                        <NavLink
                                            to={ el.link }
                                            className='burger-link'
                                        >
                                            { el.text }
                                        </NavLink>
                                        <ul
                                            ref={ setCollapsibleElement }
                                        >
                                            {
                                                el.submenu.map(subEl => {
                                                    return (
                                                        <li
                                                            key={ subEl.id }
                                                            className='burger-submenu-el'
                                                        >
                                                            <NavLink
                                                                to={ subEl.link }
                                                                className='burger-submenu-link'
                                                            >
                                                                { subEl.text }
                                                            </NavLink>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                ) }
                            />)
                        }
                    }) }
                    <div className="language-change">
                        <img onClick={()=>this.props.language('polish')} className="polish" src={pl} alt='change to polish'/>
                        <img onClick={()=>this.props.language('english')} className="english" src={eng} alt='change to english'/>
                    </div></ul> : null
                }
            </>
        )
    }
}

export default Burger;
