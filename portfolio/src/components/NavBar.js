import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav id="nav-bar">
        <div className="nav-title grow">
            <a className="menu-item grow" href="index.html"><h2>ALLY THOMAS</h2></a>
        </div>            
        <div className="nav-links">
            <span className="menu-item hover-underline-animation-bluegreen">Web Developer</span>
            <span className="menu-item hover-underline-animation-yellowpink">UI</span>
            <span className="menu-item hover-underline-animation-bluecyan">Video Editor</span>
        </div>
    </nav>
  );
}

export default NavBar;
