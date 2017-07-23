/**
 * Created by pomy on 23/07/2017.
 */

import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

export default createStore(reducers);
