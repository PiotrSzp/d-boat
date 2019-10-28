import React, {Component} from 'react';
import copy from "../../copy";
import NavMenu from "./NavMenu";
import Burger from "./BurgerMenu";



class Nav extends Component {
    state = {
        isTop: true,
    };

    componentDidMount() {
        document.addEventListener('scroll', () => {
            let height = window.innerHeight;
            this.props.color==='black'? height = window.innerHeight:height=100;
            if (this.props.color==='black'){
                window.addEventListener('resize',function(){
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
            <nav className={this.state.isTop?`nav scroll-${this.props.color}`:'nav'}>
                <div className='wrapper nav-wrapper'>
                    <a href="/" className={this.state.isTop?`nav-logo logo-${this.props.color}`:'nav-logo'}/>
                    <Burger list={copy.English.menu}/>
                    <NavMenu top={this.state.isTop} color={this.props.color}/>
                </div>
            </nav>
        )
    }
}


export default Nav
