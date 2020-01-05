import React from 'react';
import {NavLink} from 'react-router-dom';
import SlideToggle from 'react-slide-toggle';
import selectArrow from '../../assets/img/select-language.png'

class NavMenu extends React.Component {
    state = {
        collapseEvent: 0,
        value: 'EN'
    };

    body = document.querySelector('body');

    handleOnChange = (e) => {
        this.props.language(e.target.value);
        this.setState({
            value: e.target.value === 'polish'?'PL':'EN'
        })
    };

    collapseClickOnBody = e => {
        this.setState({
            collapseEvent: Date.now(),
        });
        this.body.removeEventListener('click', this.collapseClickOnBody);
    };

    render() {
        return (
            <ul className="nav-menu">
                <div className="select-wrapper">
                    <select onChange={this.handleOnChange}  className="language-change">
                        <option value="polish">Polski</option>
                        <option value="english" selected>English</option>
                    </select>
                    <div className="lang-value">
                        {this.state.value}
                        <img src={selectArrow}/>
                    </div>
                </div>
                <div className="nav-vertical-bar"/>
                {this.props.list.menu.map(el => {
                    return <SlideToggle
                        key={el.id}
                        duration={500}
                        collapseEvent={this.state.collapseEvent}
                        collapsed
                        render={({toggle, setCollapsibleElement}) => (
                            <li
                                className='nav-menu-el'
                                onClick={() => {
                                    if (Date.now() - this.state.collapseEvent > 20 && el.submenu) {
                                        this.body.addEventListener('click', this.collapseClickOnBody);
                                        toggle();
                                    } else {
                                        this.body.removeEventListener('click', this.collapseClickOnBody);
                                    }
                                }}
                            >
                                <NavLink
                                    to={el.link}
                                    className='nav-menu-link'
                                    // onClick to avoid scrolling to top when dropping dropdown submenu
                                    onClick={(e) => {
                                        if (el.submenu) {
                                            e.preventDefault();
                                        }
                                    }}
                                >
                                    {el.text}
                                </NavLink>
                                {
                                    el.submenu ? <ul
                                        ref={setCollapsibleElement}
                                        className='nav-menu-submenu'
                                    >
                                        {
                                            el.submenu.map(subEl => {
                                                return (
                                                    <li
                                                        key={subEl.id}
                                                        className='nav-menu-subel'
                                                    >
                                                        <NavLink
                                                            to={subEl.link}
                                                            className='nav-menu-sublink'
                                                            style={{
                                                                backgroundImage: `url(${require(`../../assets/models-submenu/${subEl.img}`)})`,
                                                            }}
                                                        >
                                                            {subEl.text}
                                                        </NavLink>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul> : null
                                }
                            </li>
                        )}
                    />
                })}
            </ul>
        )
    }
}


export default NavMenu
