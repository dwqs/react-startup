// Promise polyfill for webpack2+: https://stackoverflow.com/questions/38960490/how-can-i-polyfill-promise-with-webpack
require('es6-promise').polyfill();

import 'normalize.css';
import 'babel-polyfill';

import React, {Component, Children} from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
{{#if_eq state 'redux'}}
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import {store, history, rootReducer} from '../redux/store';
{{/if_eq}}
{{#if_eq state 'mobx'}}
import { Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { configure } from 'mobx';

import { stores, history } from '../mobx/stores';

configure({
    enforceActions: true
});
{{/if_eq}}

import routes from './routes';

{{#if_eq state 'redux'}}
const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    {routes}
                </ConnectedRouter>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    );
};
{{/if_eq}}
{{#if_eq state 'mobx'}}
const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider {...stores}>
                <Router history={history}>
                    {routes}
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    );
};
{{/if_eq}}

window.onload = function () {
    render();

    if (module.hot) {
        // Reload components
        module.hot.accept('./routes', () => { render(); });
        {{#if_eq state 'redux'}}
        // Reload reducers
        module.hot.accept('../redux/reducers', () => {
            store.replaceReducer(connectRouter(history)(rootReducer));
        });
        {{/if_eq}}
    }
};
