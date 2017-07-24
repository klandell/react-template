import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Home from 'Containers/Home';
import AboutContainer from 'Containers/About';
import NotFound from 'Containers/NotFound';

export default (
    <Switch>
        <Redirect exact from="/home" to="/" />
        <Route exact path="/" component={Home} />
        <Route path="/about/:param1?/:param2?" component={AboutContainer} />
        <Route path="*" component={NotFound} />
    </Switch>
);
