import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import './css/App.css';
import './css/navBar.css';
import './css/login.css';



class App extends Component {
  constructor(){
    super();
    this.state = {
      logged: false
    }
  }
  

  isLogged = () => {
    console.log("logged");
    this.setState({logged: true});
  }
  

  isNotLogged = () => {
    console.log("logout");
    this.setState({logged: false});
  }

  render(){

    return (
      <Router>
      <div className="App">
          <NavBar logged = {this.state.logged} isLogged={this.isLogged} isNotLogged={this.isNotLogged}/>
          <Route path="/" exact component={() => <Home logged={this.state.logged}/>}/>
          <Route path="/login" component={() => <Login isLogged={this.isLogged} isNotLogged={this.isNotLogged}/>}/>
          <Route path="/sign" component={() => <Signup isLogged={this.isLogged} />}/>
      </div>
      </Router>
    );
  }

}

export default App;
