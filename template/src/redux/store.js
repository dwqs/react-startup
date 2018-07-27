import { applyMiddleware, compose, createStore, combineReducers } from '../../../../../../Library/Caches/typescript/2.9/node_modules/redux';
import createBrowserHistory from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/history/createBrowserHistory';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import ReduxActionsPromise from 'redux-actions-promise';

import rootReducers from './reducers';

const browserHistory = createBrowserHistory();
const middleware = routerMiddleware(browserHistory);

export const rootReducer = combineReducers({...rootReducers});
export const store = createStore(
  connectRouter(browserHistory)(rootReducer),
  compose(
    applyMiddleware(middleware, ReduxActionsPromise)
  )
);

export const history = browserHistory;
