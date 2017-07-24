/**
 * Created by pomy on 23/07/2017.
 */

import './index.less';

import React, {Component} from 'react';
{{#if_eq state 'redux'}}
import {connect} from 'react-redux';

import {addToDo, deleteToDo} from '@redux/todo/actions';
{{/if_eq}}
{{#if_eq state 'mobx'}}
import {observable} from 'mobx';
import {observer,inject} from 'mobx-react';
{{/if_eq}}
import Hello from '@components/hello/index';
{{#if_eq state 'redux'}}
@connect(
    state => {
        return {
            todo: state.todo
        }
    },
    {
        addToDo,
        deleteToDo
    }
)
{{/if_eq}}
{{#if_eq state 'mobx'}}
@inject('todo')
@observer
{{/if_eq}}
export default class ToDo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            val: ''
        }
    }

    valChange = (e) => {
        this.setState({
            val: e.target.value
        })
    }

    addTodo = () => {
        {{#if_eq state 'redux'}}
        this.props.addToDo(this.state.val);
        {{/if_eq}}
        {{#if_eq state 'mobx'}}
        this.props.todo.addToDo(this.state.val);
        {{/if_eq}}
    }

    deleteToDo = (index) => {
        return () => {
            {{#if_eq state 'redux'}}
            this.props.deleteToDo(index);
            {{/if_eq}}
            {{#if_eq state 'mobx'}}
            this.props.todo.deleteToDo(index)
            {{/if_eq}}
        }
    }

    render(){
        let {list} = this.props.todo;
        {{#if_eq state 'mobx'}}
        list = observable(list).slice();
        {{/if_eq}}
        return(
            <div className="todo-list">
                <Hello />
                <input type="text" placeholder="输入 todo" value={this.state.val} onChange={this.valChange}/>
                <button className="add" onClick={this.addTodo}>添加</button>
                <ul>
                    {
                        list.length ?
                            list.map((item, index) => {
                                return <li key={index} onClick={this.deleteToDo(index)}>{item}</li>
                            }): null
                    }
                </ul>
            </div>
        )
    }
}
