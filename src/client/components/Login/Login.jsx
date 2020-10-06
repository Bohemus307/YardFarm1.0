import React from 'react';

import classes from './Login.css';
import Logo from '../Logo/Logo.jsx';

const Login = () => (
  <div className={classes.Login}>
    <Logo height="50%" />
    <span className={classes.Title}>Yard Farm</span>
    <div>
      <form className={classes.Login_Form}>
        <label className={classes.FormLabel} htmlFor="username">User Name:</label>
        <br />
        <input className={classes.FormInput} type="text" id="username" name="username" />
        <label className={classes.FormLabel} htmlFor="password">Password:</label>
        <br />
        <input className={classes.FormInput} type="text" id="password" name="password" />
        <input className={classes.Submit} type="submit" value="Submit"></input>
      </form>
    </div>

  </div>
);

export default Login;
