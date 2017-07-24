/**
 * Created by pomy on 24/07/2017.
 */

import {observable, action} from 'mobx';

class ToDoList {
    @observable
    list = null;

    constructor(){
        this.list = [];
    }

    @action
    async addToDo(item){
        let v = await Promise.resolve(`async: ${item}`);
        // another way to use async/await: https://github.com/mobxjs/mobx/issues/299
        // docs: https://mobx.js.org/refguide/action.html
        this.todoChange(v);
    }

    @action
    todoChange(item){
        this.list = [].concat(observable(this.list).slice(), item);
    }

    @action
    deleteToDo(index){
        let list = observable(this.list).slice();
        list.splice(index, 1);
        this.list = list;
    }
}

let todo = new ToDoList();

export default todo;
