// Promise polyfill for webpack2+: https://stackoverflow.com/questions/38960490/how-can-i-polyfill-promise-with-webpack
require('es6-promise').polyfill();

import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
{{#if_eq state 'redux'}}
import { connectRouter } from 'connected-react-router';

import { store, history, rootReducer } from '../redux/store';
{{/if_eq}}
{{#if_eq state 'mobx'}}
import { configure } from 'mobx';

configure({
    enforceActions: true
});
{{/if_eq}}

import APP from './app';
const mountNode = document.getElementById('app');

const render = (APP) => {
  ReactDOM.render(
    <APP />,
    mountNode
   );
};

render(APP);

if (module.hot) {
    module.hot.accept('./app', () => { render(APP); });
    {{#if_eq state 'mobx'}}
    // Reload stores
    module.hot.accept('../mobx/stores', () => { render(APP); });
    {{/if_eq}}
    {{#if_eq state 'redux'}}
    // Reload reducers
    module.hot.accept('../redux/reducers', () => {
        store.replaceReducer(connectRouter(history)(rootReducer));
    });
    {{/if_eq}}
}
