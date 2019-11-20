import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import NavMenu from "./NavMenu";
import Burger from "./BurgerMenu";



class Nav extends Component {
    state = {
        isTop: true,
        activeBurger: false
    };

    activeSwitcher = () => {
        this.setState(prev => ({
            activeBurger: !prev.activeBurger
        }))
    };

    componentDidMount() {
        document.addEventListener('scroll', () => {
            let height = window.innerHeight - 300;
            this.props.color === 'black' ? height = window.innerHeight - 300 : height = 100;
            if (this.props.color === 'black') {
                window.addEventListener('resize', function () {
                    height = window.innerHeight;
                });
            }
            const isTop = window.scrollY < height;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        });
    }


    render() {
        return (
            <nav className={ this.state.isTop ? `nav scroll-${ this.props.color }` : 'nav' }
                 style={ this.state.activeBurger && this.props.color === 'black' ? { backgroundColor: '#000' } : null }>
                <div className='wrapper nav-wrapper'>
                    <NavLink to="/" className={ this.state.isTop ? `nav-logo logo-${ this.props.color }` : 'nav-logo' } />
                    <Burger language={this.props.language} switcher={this.activeSwitcher } color={ this.props.color } top={ this.state.isTop }
                            list={this.props.list.menu } />
                    <NavMenu language={this.props.language} list={this.props.list} top={ this.state.isTop } color={ this.props.color } />

                </div>
            </nav>
        )
    }
}


export default Nav
