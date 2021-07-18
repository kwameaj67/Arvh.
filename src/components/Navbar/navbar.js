import React,{useState} from 'react';
import './navbar.css';
import './navbar_responsive.css';

function Navbar() {
  const [show, setShow] = useState(false)

  const toggleMenu = () => {
      setShow(!show)
  }

  return (
    <>
    <div className="navbar">
      <div className="navbar_container">
        <div className="logo">
          <a href="/">Arvh.</a>
        </div>
        <div className="nav_links_container">
          <ul className="nav_links">
            <li><a href="/" id="home">Home</a></li>
            <li><a href="/" id="about">About</a></li>
            <li><a href="/" id="services">Services</a></li>
            <li><a href="/" id="projects">Projects</a></li>
          </ul>
          <div className="nav_link_button">
            <a href="/contact" className="button" >Contact Us</a>
          </div>
        </div>
        <div className={show ? "menu is-active": "menu" } onClick={toggleMenu} id="mobile_menu">
          <div className="bar_items">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
      {/* hamburget menu */}
      <div className={show ? "hamburger_menu_container active" : "hamburger_menu_container"}>
          <ul className="hamburger_links">
            <li><a href="/" id="home">Home</a></li>
            <li><a href="/" id="about">About</a></li>
            <li><a href="/" id="services">Services</a></li>
            <li><a href="/" id="projects">Projects</a></li>
          </ul>
          <div className="hamburger_button">
            <a href="/contact" className="button" >Contact Us</a>
          </div>
        </div>
    </div>
    </>
  );
}

export default Navbar;
