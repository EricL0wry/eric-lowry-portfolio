import React from 'react';

export default function NavItem(props) {
  const { text } = props;
  return (
    <li className="nav-item">
      <a className="nav-link" href={`#${text.toLowerCase()}`}>
        {text}
      </a>
    </li>
  );
}
