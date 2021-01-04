import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo.jsx';
import classes from './Navbar.css';

const Navbar = () => (
  <nav className={classes.Item1}>
    <div className={classes.LogoDiv}>
      <Logo height="70px" />
      <span style={{ fontSize: '24px', fontWeight: 'bold' }}>Yard Farm</span>
    </div>
    <div className={classes.LinkList}>
      <div className={classes.LinkDiv}>
        <Link className={classes.NavLink} to="/">
          <img style={{ width: '60%' }} src="/images/user.svg" alt="Login" title="Login" />
        </Link>
      </div>
      <div className={classes.LinkDiv}>
        <Link className={classes.NavLink} to="/dashboard">
          <img style={{ width: '60%' }} src="/images/dashboard.svg" alt="Dashboard" title="Dashboard" />
        </Link>
      </div>
      <div className={classes.LinkDiv}>
        <Link className={classes.NavLink} to="/alerts">
          <img style={{ width: '60%' }} src="/images/alert.svg" alt="Alerts" title="Alerts" />
        </Link>
      </div>
      <div className={classes.LinkDiv}>
        <Link className={classes.NavLink} to="/controls">
          <img style={{ width: '60%' }} src="/images/controls.svg" alt="Controls" title="Controls" />
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
