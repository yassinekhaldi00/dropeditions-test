import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
    return (
        <nav>
          <div className="logo">LOGO</div>
          <ul>
            <li> <Link to="/login" className="signin">Authentification</Link></li>
            <li> <Link to="/"> Private section 3 </Link></li>
            <li> <Link to="/"> Private section 2 </Link></li>
            <li> <Link to="/"> Private section 1 </Link></li>
            <li> <Link to="/"> Home </Link></li>
          </ul>
        </nav>
    )
}

export default NavBar;