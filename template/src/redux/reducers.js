import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import TimeReducer from './time/reducer'
import TodoReducer from './todo/reducer'

export default (history) => combineReducers({
  router: connectRouter(history),
  time: TimeReducer,
  todo: TodoReducer
})
