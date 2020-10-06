import React from 'react';

import classes from './Login.css';
import Logo from '../Logo/Logo.jsx';

const Login = () => (
  <div className={classes.Login}>
    <Logo height="50%" />
    <span>Yard Farm</span>
    <div>
      <form className={classes.Login_Form}>
        <label htmlFor="username">User Name:</label>
        <br />
        <input type="text" id="username" name="username" />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="text" id="password" name="password" />
        <input type="submit" value="Submit"></input>
      </form>
    </div>

  </div>
);

export default Login;
