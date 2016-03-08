/*
* Module dependecies
*/

import React from 'react';
import { Router, Route, IndexRoute} from 'react-router';
import { render } from 'react-dom';
import createHashHistory from 'history/lib/createHashHistory';
import Index from './components/Index';
import Menu from './components/nav/Menu';
import PaginaPrincipal from './components/PaginaPrincipal';
import NotFound from './components/NotFound';

let RouteHandler = Router.RouteHandler;

let history = createHashHistory({
	queryKey: false
});

let routes = <Route component={Index} path='/'>
		<IndexRoute component={PaginaPrincipal} />
		<Route path="*" component={NotFound} />
	</Route>

render(<Router history={history}>{routes}</Router>, document.getElementById('container'));