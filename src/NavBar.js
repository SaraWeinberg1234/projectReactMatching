import { Link } from "react-router-dom";
import "./NavBar.css";
import * as React from 'react';
const NavBar = () => {
  return (<>

    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/SeeDonation">סטטוס התרומות</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Contain">לתרומה</Link>
          </li>
          <li className="navbar-item">
            <Link to="/">בית</Link>
          </li>
        </ul>
      </div>
    </nav>
  </>
  );
}

export default NavBar;






