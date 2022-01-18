import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      {routes.map(({ routeName, routePath }) => (
        <li key={routePath}>
          <Link to={routePath}>{routeName}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;