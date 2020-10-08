import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo.jsx';
import classes from './Navbar.css';

const Navbar = () => (
  <nav className={classes.Item1}>
    <div className={classes.LogoDiv}>
      <Logo height="50px" />
      <span>Yard Farm</span>
    </div>
    <div className={classes.NavLink}>
      <Link to="/">Login</Link>
    </div>
    <div>
      <Link to="/dashboard">DashBoard</Link>
    </div>
    <div>
      <Link to="/alerts">Alerts</Link>
    </div>
    <div>
      <Link to="/controls">Controls</Link>
    </div>
  </nav>
);

export default Navbar;
