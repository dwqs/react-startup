/**
 * Created by pomy on 23/07/2017.
 */

import {combineReducers} from 'redux';

import TimeReducer from './time/reducer';
import TodoReducer from './todo/reducer';

export  default combineReducers({
    time: TimeReducer,
    // todo: TodoReducer
})
