/**
 * Created by pomy on 20/07/2017.
 */

import './reset.less';

import React, {Component, Children} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {getAsyncComponent} from 'async-react-component';
import { AppContainer } from 'react-hot-loader';

import { Provider } from 'react-redux';

import store from '../redux/store';

const history = createBrowserHistory();
const env = process.env.NODE_ENV || 'development';

const App = () => import(/* webpackChunkName: "main" */ '../general/app/index');
const Info = () => import(/* webpackChunkName: "info" */ '@components/info/index');

const RootApp = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={getAsyncComponent(App)}></Route>
                    <Route path='/info' component={getAsyncComponent(Info)}></Route>
                    <Route render={() => <div>404 not found</div>}></Route>
                </Switch>
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
