import {BrowserRouter as Router,  Route, Switch} from 'react-router-dom';
import React from 'react';
import  NavBar  from '../NavBar/NavBar';
import  Home  from '../Home/Home';
import  Login  from '../Login/Login';

function RouterBrowser () {
     return (
          <>
              <Router>
                <NavBar/>
                <Switch>
                  <Route path="/Login" component={Login}/>
                  <Route path="/Home"  component={Home}/>
                </Switch>
              </Router>
          </>
     );
}

export default RouterBrowser;