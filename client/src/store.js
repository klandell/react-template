import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import history from './history';

let middleware = [thunk, routerMiddleware(history)];

// Apply any dev only middleware
if (process.env.NODE_ENV !== 'production') {
    const logger = require('redux-logger').createLogger(); // eslint-disable-line global-require
    middleware = [...middleware, logger];
}

// Export our global redux store
export default createStore(reducer, applyMiddleware(...middleware));
