import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';
import {Home} from './Components/Home/Home';
import {Login} from './Components/Login/Login';
import {Register} from './Components/Register/Register';


function App() {
  return (
    <Router>
      <Fragment>
        <ul className="list">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
