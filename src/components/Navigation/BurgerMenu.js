import React from 'react';
import { NavLink } from 'react-router-dom';
import SlideToggle from 'react-slide-toggle';


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
                    <div className={this.props.color==='white' && this.props.top?'burger-line black':'burger-line'}/>
                    <div className={this.props.color==='white' && this.props.top?'burger-line black':'burger-line'}/>
                    <div className={this.props.color==='white' && this.props.top?'burger-line black':'burger-line'}/>
                </button>
                {/*Slide Menu*/ }
                { this.state.isOn ? <ul className='burger-list' style={this.props.color==='white' && this.props.top?{marginTop: '20px'}>
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
                </ul> : null
                }
            </>
        )
    }
}

export default Burger;
