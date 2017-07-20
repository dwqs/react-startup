/**
 * Created by pomy on 20/07/2017.
 */

import './reset.less';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import ParamsExample from '../general/app/index';

const env = process.env.NODE_ENV || 'development';
if(env === 'development'){
    window.onload = function () {
        const render = Component => {
            ReactDOM.render(
                <AppContainer>
                    <Component />
                </AppContainer>,
                document.getElementById('app')
            )
        };

        render(ParamsExample);

        // HMR
        if (module.hot) {
            module.hot.accept('../general/app/index', () => { render(ParamsExample) })
        }
    };
} else {
    window.onload = function () {
        ReactDOM.render(
            <ParamsExample />,
            document.getElementById('app')
        );
    };
}
