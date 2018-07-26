/**
 * Created by pomy on 23/07/2017.
 */

import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import createBrowserHistory from 'history/createBrowserHistory';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import ReduxActionsPromise from 'redux-actions-promise';

import rootReducers from './reducers';

const browserHistory = createBrowserHistory();
const middleware = routerMiddleware(browserHistory);

export const store = createStore(
    connectRouter(history)(combineReducers({...rootReducers})),
    compose(
        applyMiddleware(middleware, ReduxActionsPromise)
    )
);

export const history = browserHistory;
