import { Map, fromJS }      from 'immutable';
import {
	syncHistoryWithStore,
	routerMiddleware
}                           from 'react-router-redux';
import {
	compose,
	createStore,
	applyMiddleware
}                           from 'redux';
import createSagaMiddleware from 'redux-saga'
import { rootReducer }      from 'root-reducer';

export function configureStore (history) {
	const sagaMiddleware = createSagaMiddleware();
	const devtools       = window.devToolsExtension || (() => noop => noop);

	const middlewares = [
		sagaMiddleware,
		routerMiddleware(history),
	];

	const enhancers = [
		applyMiddleware(...middlewares),
		devtools(),
	];

	const store = createStore(
		rootReducer,
		compose(...enhancers)
	);

	store.runSaga = sagaMiddleware.run;
	store.asyncSagas = {};

	return store;
}
