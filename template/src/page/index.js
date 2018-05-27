// Promise polyfill for webpack2+: https://stackoverflow.com/questions/38960490/how-can-i-polyfill-promise-with-webpack
require('es6-promise').polyfill();

import 'normalize.css';
import 'babel-polyfill';

import React, {Component, Children} from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
{{#if_eq state 'redux'}}
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import {store, history} from '../redux/store';
{{/if_eq}}
{{#if_eq state 'mobx'}}
import { Provider } from 'mobx-react';
import { configure } from 'mobx';
import { stores, history } from '../mobx/stores';

configure({
    enforceActions: true
});
{{/if_eq}}

const env = process.env.NODE_ENV || 'development';

import routes from './routes';

const RootApp = () => {
    {{#if_eq state 'redux'}}
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Router>
                    {routes}
                </Router>
            </ConnectedRouter>
        </Provider>
    );
    {{/if_eq}}
    {{#if_eq state 'mobx'}}
    return (
        <Provider {...stores}>
            <Router history={history}>
                {routes}
            </Router>
        </Provider>
    )
    {{/if_eq}}
};

if(env === 'development'){
    window.onload = function () {
        const render = Component => {
            ReactDOM.render(
                <AppContainer>
                    <Component />
                </AppContainer>,
                document.getElementById('app')
            );
        };

        render(RootApp);

        // HMR
        if (module.hot) {
            module.hot.accept('./routes', () => { render(RootApp); });
        }
    };
} else {
    window.onload = function () {
        ReactDOM.render(
            <RootApp />,
            document.getElementById('app')
        );
    };
}
