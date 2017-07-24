import React from 'react';
import ReactDOM from 'react-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import App from 'Components/app/App';

// install the offline plugin to enable offline browsing and faster loading.
OfflinePluginRuntime.install({
    onUpdateReady: () => OfflinePluginRuntime.applyUpdate(),
    onUpdated: () => window.location.reload(),
});

const app = document.getElementById('app');
ReactDOM.render(
    <App />, app,
);
