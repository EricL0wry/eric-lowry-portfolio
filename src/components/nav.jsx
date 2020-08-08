import React from 'react';
import NavItem from './nav-item';

export default function Nav(props) {
  const navItemElements = props.navItems.map((item) => {
    const { id, text } = item;
    return <NavItem key={id} text={text} />;
  });

  return (
    <nav className="navbar fixed-top navbar-light bg-light navbar-expand-xl">
      <div className="container">
        <span className="navbar-brand">Eric Lowry</span>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">{navItemElements}</ul>
        </div>
      </div>
    </nav>
  );
}
