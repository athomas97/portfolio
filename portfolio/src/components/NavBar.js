import React from 'react';

function NavBar() {
  return (
    <nav id="nav-bar">
        <div className="nav-title grow">
            <a className="menu-item grow" href="index.html"><h2>ALLY THOMAS</h2></a>
        </div>            
        <div className="nav-links">
            {/* <a
              className="menu-item hover-underline-animation-bluegreen"
              href="#technologies"
            >
              Technologies
            </a> */}
            <a
              className="menu-item hover-underline-animation-bluecyan"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="menu-item hover-underline-animation-yellowpink"
              href="#contact"
            >
              Contact
            </a>
        </div>
    </nav>
  );
}

export default NavBar;
