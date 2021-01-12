import React from 'react';
import { BrowserRouter ,Switch, Route } from 'react-router-dom';

import Login from './pages/Login/Login.component';

const Routes = () => {
    return( 
    <BrowserRouter>
        <Switch>    
            <Route exact path="/login" component={Login} />
        </Switch>
    </BrowserRouter>
    )
}

export default Routes;