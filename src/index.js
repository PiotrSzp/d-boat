import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/nav'
import './styles.scss'

function App(){
    return (
        <Nav/>
    )
}



ReactDOM.render(<App />, document.getElementById('root'));