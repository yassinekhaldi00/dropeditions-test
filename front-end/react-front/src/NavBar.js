import React from 'react';

function NavBar(){
    return (
        <nav>
          <div className="logo">LOGO</div>
          <ul>
            <li> <a className="signin" href="#">Authentification</a> </li>
            <li> <a href="#">Private section 3</a> </li>
            <li> <a href="#">Private section 2</a> </li>
            <li> <a href="#">Private section 1</a> </li>
            <li> <a  href="#">Home</a> </li>
          </ul>
        </nav>
    )
}

export default NavBar;