import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Welcome from '../pages/welcome/Welcome';
import NotFound from '../pages/errors/not-found/NotFound';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="*" component={NotFound} />
    </Route>
);

export default routes;
