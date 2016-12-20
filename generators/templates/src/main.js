import babelPolyfill      from 'babel-polyfill';
import React              from 'react';
import { render }         from 'react-dom';
import {
	Router,
	Route,
	IndexRoute,
	hashHistory,
	browserHistory
}                         from 'react-router';
import { Provider }       from 'react-redux';
import {
	syncHistoryWithStore,
	routerMiddleware
}                         from 'react-router-redux';
import { configureStore } from './store';

// Containers
import { App }       from 'containers/app/app';

const store   = configureStore(hashHistory);
const history = syncHistoryWithStore(hashHistory, store, {
  selectLocationState (state) {
		return state.get('routing').toObject();
  }
});

window.store = store;

render(
	<Provider store={ store } >
		<Router history={ history } >
			<Route path="/" >
				<IndexRoute component={ App } />
			</Route>
		</Router>
	</Provider>, document.getElementById('container'));
