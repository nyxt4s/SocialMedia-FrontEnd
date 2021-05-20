import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import react from 'react';
import Login from '../Login/Login';
import Home from '../Home/Home';
import './routeStyle.css' ;


function Rutas () {
     return (
          <>
            <BrowserRouter>
            <nav>
          
            </nav>
            <Link to="/Login" className="btn btn-dark" isActive> Login</Link>
            <Link to="/Home" className="btn btn-dark" isActive> Home</Link>
            
                <Switch>
                  <Route path="/Login">
                   <Login></Login>
                  </Route>
                  <Route path="/Home">
                    <Home></Home>
                  </Route>
                </Switch>
            </BrowserRouter>
          </>
     );
}

export default Rutas;