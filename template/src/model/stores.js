/**
 * Created by pomy on 24/07/2017.
 */

import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import time from './time';
import todoList from './todo';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

export let history = syncHistoryWithStore(browserHistory, routingStore);

export let store = {
    time,
    todoList,
    routing: routingStore,
};

