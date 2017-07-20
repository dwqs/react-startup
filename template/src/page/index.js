/**
 * Created by pomy on 20/07/2017.
 */

'use strict';

import './reset.less';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

window.onload = function () {
    ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/info" component={Info}/>
        </Router>,
        document.getElementById('app')
    )
};
