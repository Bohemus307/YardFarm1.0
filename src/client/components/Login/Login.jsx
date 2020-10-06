import React from 'react';

import classes from './Login.css';
import Logo from '../Logo/Logo.jsx';

const Login = () => (
  <div className={classes.Login}>
    <div className={classes.Container}>
      <div className={classes.LeftDiv}>
        <Logo height="80%" />
      </div>
      <div className={classes.RightDiv}>
        <div className={classes.Title}>Yard Farm Login</div>
        <form className={classes.Login_Form}>
          <br />
          <input className={classes.FormInput} type="text" id="username" name="username" placeholder="Username" />
          <span>
            <img className={classes.InputImage} src="/images/id-card.png" alt="username" title="username" />
          </span>
          <br />
          <input className={classes.FormInput} type="password" id="password" name="password" placeholder="Password" />
          <span>
            <img className={classes.InputImage} src="/images/password.png" alt="password" title="password" />
          </span>
          <input className={classes.Submit} type="submit" value="Submit" id="submit" />
        </form>
      </div>
    </div>
  </div>
);

export default Login;
