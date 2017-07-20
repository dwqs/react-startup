/**
 * Created by pomy on 20/07/2017.
 */

import './reset.less';

import React, {Component, Children} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { AppContainer } from 'react-hot-loader';

const history = createBrowserHistory();
const env = process.env.NODE_ENV || 'development';

function getAsyncComponent(promise) {
    return class AsyncComponent extends React.Component {

        constructor(props){
            super(props);
            this.state = {
                Component: null
            }
        }

        componentWillMount() {
            if (!this.state.Component) {
                promise().then(mod => {
                    this.setState({
                        Component: mod.default ? mod.default : mod
                    })
                })
            }
        }
        render() {
            const { Component } = this.state
            if (Component) {
                return <Component {...this.props} />
            }
            // Failed to resolve async component
            return null;
        }
    }
}

const App = () => import(/* webpackChunkName: "app1" */ '../general/app/index');
const Info = () => import(/* webpackChunkName: "info" */ '@components/info/index');

const RootApp = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={getAsyncComponent(App)}></Route>
                <Route path='/info' component={getAsyncComponent(Info)}></Route>
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
