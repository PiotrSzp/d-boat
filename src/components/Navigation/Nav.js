import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import NavMenu from "./NavMenu";
import Burger from "./BurgerMenu";



class Nav extends Component {
    state = {
        activeBurger: false
    };

    activeSwitcher = () => {
        this.setState(prev => ({
            activeBurger: !prev.activeBurger
        }))
    };

    render() {
        return (
            <nav className='nav'>
                <div className='wrapper nav-wrapper'>
                    <NavLink to="/" className='nav-logo' />
                    <Burger language={this.props.language} switcher={this.activeSwitcher } color={ this.props.color }
                            list={this.props.list.menu } />
                    <NavMenu language={this.props.language} list={this.props.list} top={ this.state.isTop } color={ this.props.color } />

                </div>
            </nav>
        )
    }
}


export default Nav
