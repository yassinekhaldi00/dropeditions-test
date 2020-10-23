import React from 'react';
import NavBar from './NavBar';
import Section from './Section';
import Section3 from './Section3';
import './App.css';
import './navBar.css';
import './section.css';

function App() {
  return (
    <div className="App">
        <NavBar/>

        <div className ="main">
          <div className = "home">
            <p>Welcome to our site</p>
          </div>
          <Section3/>
          
        </div>
    </div>
  );
}

export default App;
