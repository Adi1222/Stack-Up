import React from 'react';
import { BrowserRouter ,Switch, Route } from 'react-router-dom';

import Login from './pages/Login/Login.component';
import SignupComponent from './pages/Register/Signup.component';

const Routes = () => {
    return( 
    <BrowserRouter>
        <Switch>    
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignupComponent} />
        </Switch>
    </BrowserRouter>
    )
}

export default Routes;