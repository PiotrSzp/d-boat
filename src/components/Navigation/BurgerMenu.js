import React, {Component} from 'react';


class Burger extends Component {

    state={
      isOn: false
    };

    handleOnClick = ()=>{
      this.setState(prev=>({
          isOn: !prev.isOn
      }))

    };
    render() {
        return (
            <>
            {/*Burger*/}
            <button onClick={this.handleOnClick} className={`burger-menu ${this.state.isOn?'burger-active':null}`}>
                <div className='burger-line'></div>
                <div className='burger-line'></div>
                <div className='burger-line'></div>
            </button>

                {/*//Slide Menu*/}
        {this.state.isOn?<ul className='burger-list'>{this.props.list.map(el=>{
            return  <li key={el.id} className='burger-el'><a href={el.link} className='burger-link'>{el.text}</a></li>
        })}</ul>:null}
        </>
        )
    }

}

export default Burger;