/**
 * Created by pomy on 20/07/2017.
 */

import 'babel-polyfill';
import './reset.less';

import React, {Component, Children} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

// import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

// import {store, history} from '../redux/store';

import {Provider} from 'mobx-react';
import {useStrict} from 'mobx';
import {stores, history} from '../model/stores';

useStrict(true);

const env = process.env.NODE_ENV || 'development';

import routes from './routes';

const RootApp = () => {
    // return (
    //     <Provider store={store}>
    //         <ConnectedRouter history={history}>
    //             <Router>
    //                 {routes}
    //             </Router>
    //         </ConnectedRouter>
    //     </Provider>
    // );
    return (
        <Provider {...stores}>
            <Router history={history}>
                {routes}
            </Router>
        </Provider>
    )
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
