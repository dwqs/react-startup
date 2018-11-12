import { applyMiddleware, compose, createStore } from 'redux'
import createBrowserHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'connected-react-router'
import ReduxActionsPromise from 'redux-actions-promise'

import createRootReducer from './reducers'

const browserHistory = createBrowserHistory()
const middleware = routerMiddleware(browserHistory)

export const store = createStore(
  createRootReducer(browserHistory),
  compose(
    applyMiddleware(middleware, ReduxActionsPromise)
  )
)

export const history = browserHistory
