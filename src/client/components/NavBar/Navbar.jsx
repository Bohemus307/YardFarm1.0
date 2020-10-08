import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo.jsx';
import classes from './Navbar.css';

const Navbar = () => (
  <nav className={classes.Item1}>
    <div className={classes.LogoDiv}>
      <Logo height="50px" />
      <span style={{ fontSize: '30px', fontWeight: 'bold' }}>Yard Farm</span>
    </div>
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
  </nav>
);

export default Navbar;
