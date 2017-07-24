import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import LayoutContainer from 'Components/layout/LayoutContainer';
import store from './store';
import routes from './routes';
import history from './history';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <LayoutContainer>{routes}</LayoutContainer>
                </ConnectedRouter>
            </Provider>
        );
    }
}
