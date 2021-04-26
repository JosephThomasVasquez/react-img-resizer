import React from "react";

const NavBarComponent = () => {
  return (
    <div>
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
    </div>
  );
};

export default NavBarComponent;
