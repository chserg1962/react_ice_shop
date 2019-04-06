import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFound from '././Components/NotFound/NotFound';
import Home from './Components/Home/Home.js';
import Catalog from './Components/catalog/catalog';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/catalog" component={Catalog}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    </BrowserRouter>
);
export default Routes;
