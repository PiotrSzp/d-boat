import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';


class Burger extends Component {

    state={
      isOn: false
    };

    handleOnClick = ()=>{
        this.props.switcher();

        this.setState(prev=>({
          isOn: !prev.isOn
      }))
    };
    handleOnLink = ()=>{
        this.props.switcher();
        this.setState(prev=>({
            isOn: false
        }))
    };
    render() {
        return (
            <>
            {/*Burger*/}
            <button onClick={this.handleOnClick} className={`burger-menu ${this.state.isOn?'burger-active':null}`}>
                <div className={this.props.color==='white' && this.props.top?'burger-line black':'burger-line'}></div>
                <div className={this.props.color==='white' && this.props.top?'burger-line black':'burger-line'}></div>
                <div className={this.props.color==='white' && this.props.top?'burger-line black':'burger-line'}></div>
            </button>

                {/*//Slide Menu*/}
        {this.state.isOn?<ul className='burger-list' style={this.props.color==='white'?{marginTop: '20px'}:null}>{this.props.list.map(el=>{
            return  <li onClick={this.handleOnLink} key={el.id} className='burger-el'><NavLink to={el.link}  className='burger-link'>{el.text}</NavLink></li>
        })}</ul>:null}
        </>
        )
    }

}

export default Burger;
