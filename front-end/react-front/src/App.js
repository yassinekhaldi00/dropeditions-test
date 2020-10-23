import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Login from './Login';
import './App.css';
import './navBar.css';
import './login.css';

class App extends Component {
  constructor(){
    super();
  }



  render(){
    return (
      <Router>
      <div className="App">
          <NavBar/>
          <Route path="/" exact component={Home}/>
          <Route path="/login" component={Login}/>
      </div>
      </Router>
    );
  }

}

export default App;
