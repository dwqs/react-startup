/**
 * Created by pomy on 20/07/2017.
 */

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Child extends React.Component{
    render() {
        console.log('111child', this.props);
        let {match} = this.props;
        return (
            <div className="child">{match.params.id}</div>
        )
    }
}

export default class ParamsExample extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <h2>Accounts</h2>
                    <ul>
                        <li><Link to="/netflix">Netflix11</Link></li>
                        <li><Link to="/zillow-group">Zillow Group</Link></li>
                        <li><Link to="/yahoo">Yahoo</Link></li>
                        <li><Link to="/modus-create">Modus Create</Link></li>
                    </ul>
                    <Route path="/:id" component={Child}/>
                </div>
            </Router>
        )
    }
}
