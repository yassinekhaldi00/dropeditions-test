import React, { Component } from 'react';
import Logged from './Logged';
import './section.css';

class Home extends Component {

    constructor(){
      super();
    }
  
    state = {
      logged: true
    }

    
  
    render(){
      return (
        <div className = "home">
            <p className='welcome'>Welcome to our web site</p>
            {this.state.logged ? (
                <Logged/>
            ):(
            <button className='log'>login</button>
            )}
        </div>
      )

    }

}

export default Home;