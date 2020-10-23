import React, { Component } from 'react';
import Navbar from './NavBar';

class Login extends Component{
    constructor(){
        super();
    }

    state = {
        email:'',
        password:''
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        
    }

    render(){
        return (
            <div classNam='login'>
                <form className="form" onSubmit={this.mySubmitHandler}>
                    <i className="material-icons">lock</i>
                    <input className = 'input' type = 'email'name='email' placeholder='Email' onChange={this.myChangeHandler}/>
                    <input className = 'input' type = 'password' name = 'password' placeholder='Password' onChange={this.myChangeHandler}/>
                    <button className='btn' type='submit'>Log In</button>
                 </form>
            </div>
        )
    }
} 

export default Login;