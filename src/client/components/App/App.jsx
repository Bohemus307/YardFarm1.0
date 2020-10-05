import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Dashboard from '../DashBoard/Dashboard.jsx';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/alerts">Alerts</Link>
            </li>
            <li>
              <Link to="/controls">Controls</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/alerts">
            <Alerts />
          </Route>
          <Route path="/controls">
            <Controls />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Login() {
  return <h2>Login</h2>;
}

function Alerts() {
  return <h2>Alerts</h2>;
}

function Controls() {
  return <h2>Controls</h2>;
}
