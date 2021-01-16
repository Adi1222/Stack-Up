import React from 'react';
import { BrowserRouter ,Switch, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage.component';

import Login from './pages/Login/Login.component';
import SignupComponent from './pages/Register/Signup.component';



const Routes = () => {
    return( 
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />  
            <Route exact path="/signup" component={SignupComponent} />  
            <Route exact path="/login" component={Login} />
        </Switch>
    </BrowserRouter>
    )
}

export default Routes;