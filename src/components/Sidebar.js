import React from 'react';
import FontAwesome from 'react-fontawesome';

const Sidebar = () => {
  return (
    <aside>
      <nav>
        <ul className="navbar">
          <li className="active-nav-link">
            <a href="/" className="nav-link">
              <FontAwesome name="users" tag="i" />
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              <FontAwesome name="book" tag="i" />
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
