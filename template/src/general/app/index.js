/**
 * Created by pomy on 20/07/2017.
 */

import './index.less';

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
{{#if_eq state 'redux'}}
import { connect } from 'react-redux';

import { getCurTime } from '@redux/time/actions';
{{/if_eq}}
{{#if_eq state 'mobx'}}
import {observer,inject} from 'mobx-react';
{{/if_eq}}
import Hello from '@components/hello/index';
{{#if_eq state 'redux'}}
@connect(
    state => {
        return {
            time: state.time
        }
    },
    {
        getCurTime
    }
)
{{/if_eq}}
{{#if_eq state 'mobx'}}
@inject('time')
@observer
{{/if_eq}}
export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'webpack 4 + react 16 + react-router 4'
        }
    }

    getCurTime= () => {
        {{#if_eq state 'redux'}}
        this.props.getCurTime();
        {{/if_eq}}
        {{#if_eq state 'mobx'}}
        this.props.time.getCurTime();
        {{/if_eq}}
    }

    render() {
        let t = new Date(this.props.time.curTime || Date.now());
        return (
            <div>
                <h3>{this.state.title}</h3>
                <Hello />
                <p className="doc">
                    Documentation can be found at:
                    <a href="https://github.com/dwqs/react-startup" target="_blank">react-startup</a>
                </p>
                <Link to="/info">查看项目信息</Link>
                <Link to="/todo">todo示例</Link>
                <div className="time">
                    <span> 当前时间: {t.toLocaleString()}</span>
                    <span onClick={this.getCurTime}> 点击更新当前时间</span>
                </div>
            </div>
        )
    }
}
