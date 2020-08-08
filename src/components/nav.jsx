import React from 'react';
import NavItem from './nav-item';

export default function Nav() {
  return (
    <nav className="navbar fixed-top navbar-light navbar-expand-xl">
      <div className="container">
        <span className="navbar-brand">Eric Lowry</span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavItem />
            </li>
            <li className="nav-item">
              <NavItem />
            </li>
            <li className="nav-item">
              <NavItem />
            </li>
            <li className="nav-item">
              <NavItem />
            </li>
            <li className="nav-item">
              <NavItem />
            </li>
            <li className="nav-item">
              <NavItem />
            </li>
            <li className="nav-item">
              <NavItem />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
