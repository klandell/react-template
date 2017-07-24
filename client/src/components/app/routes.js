import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Home from 'Components/home/Home';
import AboutContainer from 'Components/about/AboutContainer';
import Error from 'Components/error/Error';

export default (
    <Switch>
        <Redirect exact from="/home" to="/" />
        <Route exact path="/" component={Home} />
        <Route exact path="/about/:param1?/:param2?" component={AboutContainer} />
        <Route path="*" component={Error} />
    </Switch>
);
