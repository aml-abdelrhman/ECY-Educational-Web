import React from "react";

function Header({ loginRef }) {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="#" className='logo'><h1>ECY Educational Website</h1></a>        
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#courses">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contactForm">Contact</a></li>
        </ul>

        <a href="#"  className="login"  onClick={(e) => { e.preventDefault(); loginRef.current.open(); }}>Login</a>
      </nav>
    </header>
  );
}

export default Header;
