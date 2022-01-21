import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';
import navbar from './Navbar.module.css';
import userIcon from '../profile-icon.svg';

const Navbar = () => (
  <nav>
    <h1 className={navbar.test}>Bookstore CMS</h1>
    <div id="#mainNavBar">
      {routes.map(({ routeName, routePath }) => (
        <NavLink key={routePath} to={routePath} className={navbar.test}>{routeName}</NavLink>
      ))}
    </div>
    <img src={userIcon} alt="User Profile Icon" />
  </nav>
);

export default Navbar;
