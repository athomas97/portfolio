import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav id="nav-bar">
        <div className="nav-title grow">
            <a className="menu-item grow" href="index.html"><h2>ALLY THOMAS</h2></a>
        </div>            
        <div className="nav-links">
            <a className="menu-item hover-underline-animation-bluegreen" href="">Web Developer</a>
            <a className="menu-item hover-underline-animation-yellowpink" href="">UI</a>
            <a className="menu-item hover-underline-animation-bluecyan" href="">Video Editor</a>  
        </div>
    </nav>
  );
}

export default NavBar;
