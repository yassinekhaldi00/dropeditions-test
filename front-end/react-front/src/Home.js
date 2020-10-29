import React from 'react';
import Logged from './Logged';
import {Link} from 'react-router-dom';
import './css/section.css';

function Home(props) {

  if(props.logged){
    return(
      <div className = "home">
          <p className='welcome'>Welcome to our web site</p>
          <Logged/>
      </div>
    )
  }else{
    return(
    <div className = "home">
          <p className='welcome'>Welcome to our web site</p>
          <Link to='/login'><button className='log'>Log In</button></Link>
          <Link to='/sign'><button className='sign'>Sign up</button></Link>
      </div>
    )
  }

}

export default Home;