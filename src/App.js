import logo from './logo.svg';
import './App.css';
import React, { Fragment, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect
} from 'react-router-dom';
import {Home} from './Components/Home/Home';
import {Login} from './Components/Login/Login';
import {Register} from './Components/Register/Register';
import {Upload} from './Components/Upload/Upload';


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = (isAuth) => {
    setIsAuthenticated(isAuth);
  };

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
          <li>
            <Link to='/Upload'>Upload</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/login' render={props => !isAuthenticated ? <Login {...props} handleAuthentication={handleAuthentication}/> :  <Redirect to="/" />}/>
          <Route 
            exact path='/register' 
            render={props => !isAuthenticated ? <Register {...props} handleAuthentication={handleAuthentication}/>  : <Redirect to="/"/>} 
          />
          <Route exact path='/upload'>
            <Upload />
          </Route>
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
