import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import Layout from 'Containers/Layout';
import store from './store';
import routes from './routes';
import history from './history';

// install the offline plugin to enable offline browsing and faster loading.
OfflinePluginRuntime.install({
    onUpdateReady: () => OfflinePluginRuntime.applyUpdate(),
    onUpdated: () => window.location.reload(),
});

const app = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Layout>{routes}</Layout>
        </ConnectedRouter>
    </Provider>, app,
);
