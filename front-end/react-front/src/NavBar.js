import React ,{useState} from 'react';
import {Link} from 'react-router-dom';


function MenuItems(props){

  if(props.logged){
    return(
        <ul>
            <li> <Link to="/"> Home </Link></li>
            <li> <Link to="/"> Private section 2 </Link></li>
            <li> <Link to="/"> Private section 1 </Link></li>
            <li> <Link to="/"> Private section 3 </Link></li>
            <li> <Link to="/" className="signin" onClick={props.isNotLogged}>Logout</Link></li>            
          </ul>
    )
  }
  else{
    return(  
      <ul >
        <li> <Link to="/"> Home </Link></li>
        <li> <Link to="/login" className="signin" >Login</Link></li>
        <li> <Link to="/sign" className="signup" >Sign up</Link></li>    
      </ul>
    )
  }
}

function NavBar(props){

  const [clicked, setClicked] = useState(false);

  return (
    <nav>
    <div className="logo">LOGO</div>
  <div className ="bar"><i className="material-icons" onClick={()=> setClicked(!clicked)}>{clicked ? 'clear' : 'list' }</i></div>
    <div className = {clicked ? 'menu-drop': 'menu'}>
      <MenuItems logged = {props.logged} isNotLogged = {props.isNotLogged}/>
    </div>
    
  </nav>
  )
}

export default NavBar;