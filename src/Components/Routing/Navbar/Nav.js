import React from "react";
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <div className="container">
          <a href="#" className="navbar-brand">
            React Routing
          </a>
          <ul className="nav">
              <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/capi">ContextAPI</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/profile">Form</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/help">Help</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
