/**
 * Created by pomy on 20/07/2017.
 */

import './reset.less';

import React, {Component, Children} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { AppContainer } from 'react-hot-loader';

import { Provider } from 'react-redux';

import store from '../redux/store';

const history = createBrowserHistory();
const env = process.env.NODE_ENV || 'development';

import routes from './routes';

const RootApp = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                {routes}
            </Router>
        </Provider>
    );
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
            RootApp,
            document.getElementById('app')
        );
    };
}
