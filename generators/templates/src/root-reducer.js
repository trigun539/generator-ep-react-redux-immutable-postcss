import { combineReducers } from 'redux-immutable';
import routeReducer        from 'route-reducer';

export const rootReducer = combineReducers({
	routing: routeReducer
});
