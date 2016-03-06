/*
* Module dependecies
*/

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { render } from 'react-dom';
import createHashHistory from 'history/lib/createHashHistory';
import Menu from './components/nav/Menu';
import Login from './components/login/Login';

let RouteHandler = Router.RouteHandler;

let history = createHashHistory({
	queryKey: false
});

let routes = <Route component={Menu} path='/'>
		<IndexRoute component={Login} />			
	</Route>

render(<Router history={history}>{routes}</Router>, document.getElementById('container'));