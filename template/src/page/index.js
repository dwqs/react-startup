/**
 * Created by pomy on 20/07/2017.
 */

import './reset.less';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Child = ({match}) => {
    return (
        <div className="child">{match.params.id}</div>
    )
}

const ParamsExample = () => (
    <Router>
        <div>
            <h2>Accounts</h2>
            <ul>
                <li><Link to="/netflix">Netflix</Link></li>
                <li><Link to="/zillow-group">Zillow Group</Link></li>
                <li><Link to="/yahoo">Yahoo</Link></li>
                <li><Link to="/modus-create">Modus Create</Link></li>
            </ul>
            <Route path="/:id" component={Child}/>
        </div>
    </Router>
)
window.onload = function () {
    ReactDOM.render(
        <ParamsExample />,
        document.getElementById('app')
    )
};

