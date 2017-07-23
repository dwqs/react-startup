/**
 * Created by pomy on 23/07/2017.
 */

import { createStore, applyMiddleware, combineReducers } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import ReduxActionsPromise from 'redux-actions-promise';

import rootReducers from './reducers';

let browserHistory = createBrowserHistory();
const middleware = routerMiddleware(browserHistory);

export let store = createStore(combineReducers({
    ...rootReducers,
    router: routerReducer
}), applyMiddleware(middleware, ReduxActionsPromise));

export let history = browserHistory;
