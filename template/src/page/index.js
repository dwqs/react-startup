/**
 * Created by pomy on 20/07/2017.
 */

import './reset.less';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { AppContainer } from 'react-hot-loader';

import App from '../general/app/index';
import Info from '@components/info/index';

const history = createBrowserHistory();
const env = process.env.NODE_ENV || 'development';

const RootApp = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={App}></Route>
                <Route path='/info' component={Info}></Route>
            </Switch>
        </Router>
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
            module.hot.accept('../general/app/index', () => { render(RootApp); });
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
