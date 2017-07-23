/**
 * Created by pomy on 23/07/2017.
 */

import './index.less';

import React, {Component} from 'react';

import {connect} from 'react-redux';

import {addToDo, deleteToDo} from '@redux/todo/actions';

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
export default class ToDo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            val: ''
        }
    }

    valChange(e){
        this.setState({
            val: e.target.value
        })
    }

    addTodo(){
        this.props.addToDo(this.state.val);
    }

    deleteToDo(index) {
        this.props.deleteToDo(index);
    }

    render(){
        let {list} = this.props.todo;

        return(
            <div className="todo-list">
                <input type="text" placeholder="输入 todo" value={this.state.val} onChange={this.valChange.bind(this)}/>
                <button className="add" onClick={this.addTodo.bind(this)}>添加</button>
                <ul>
                    {
                        list.length ?
                            list.map((item, index) => {
                                return <li key={index} onClick={this.deleteToDo.bind(this, index)}>{item}</li>
                            }): null
                    }
                </ul>
            </div>
        )
    }
}
