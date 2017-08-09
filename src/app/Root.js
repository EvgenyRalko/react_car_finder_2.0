import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import reducers from './reducers';
import routes from './routes';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
        reducers,
        composeEnhancers(
            applyMiddleware(thunkMiddleware, promiseMiddleware())
        )
);

const Root  = () => (
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>
);

export default Root;