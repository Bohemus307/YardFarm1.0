import React from 'react';

import classes from './Login.css';
import Logo from '../Logo/Logo.jsx';
import Input from '../UI/Input/Input.jsx';

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
          <div>
            <Input className={classes.FormInput} inputType="text" inputId="username" inputName="username" placeholder="Username" />
            <span className={classes.InputSpan}>
              <img className={classes.InputImage} src="/images/id-card.png" alt="username" title="username" />
            </span>
          </div>
          <br />
          <div className={classes.Password}>
            <Input className={classes.FormInput} inputType="password" inputId="password" inputName="password" placeholder="Password" />
            <span className={classes.InputSpan}>
              <img className={classes.InputImage} src="/images/password.png" alt="password" title="password" />
            </span>
          </div>
          <input className={classes.Submit} type="submit" value="Login" id="login" />
          <div className={classes.ForgotDiv}>
            <span>
              Forgot
            </span>
            <div className={classes.UserPass} href="#">
              Username / Password?
            </div>
          </div>
        </form>
        <div className={classes.Create}>
          Create Account
          <span><img className={classes.CreateImage} src="/images/right-arrow.png" alt="create account" title="create" /></span>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
