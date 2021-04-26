import React from "react";

const NavBarComponent = () => {
  return (
      <nav className="header">
        <ul>
          <li>
            <a href="/" className="nav-links">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="nav-links">
              Reset
            </a>
          </li>
        </ul>
      </nav>
  );
};

export default NavBarComponent;
