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
        <Link className={classes.NavLink} to="/">Login</Link>
      </div>
      <div className={classes.LinkDiv}>
        <Link className={classes.NavLink} to="/dashboard">DashBoard</Link>
      </div>
      <div className={classes.LinkDiv}>
        <Link className={classes.NavLink} to="/alerts">Alerts</Link>
      </div>
      <div className={classes.LinkDiv}>
        <Link className={classes.NavLink} to="/controls">Controls</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
