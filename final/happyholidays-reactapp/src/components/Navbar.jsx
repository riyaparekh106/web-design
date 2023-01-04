import React, { useState, useEffect } from "react";
import "./Navbar.css";
import "../icons.css";
import Link from "./Link.jsx";
import ThemeSwitcher from "./ThemeSwitcher";

function Navbar() {
  const [click, setClick] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link href="/">
          <div className="navbar-logo">
            <i className="gg-maze"></i>
            <span>MyBnB</span>
          </div>
        </Link>
        <Link href="/">
          <span className="skip-link">Skip to main content </span>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "gg-close" : "gg-menu"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item" onClick={closeMobileMenu}>
            <Link href={`/`} className="nav_links">
              Home
            </Link>
          </li>
          <li className="nav-item" onClick={closeMobileMenu}>
            <Link href="/signup" className="nav_links">
              Sign up
            </Link>
          </li>
          <li className="nav-item" onClick={closeMobileMenu}>
            <ThemeSwitcher
              toggleTheme={toggleTheme}
              theme={isDarkTheme ? "dark" : "light"}
            />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
