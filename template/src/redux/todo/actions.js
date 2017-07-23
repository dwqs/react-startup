/**
 * Created by pomy on 23/07/2017.
 */

import { createAction } from 'redux-actions';
import * as CONSTANT from '../types';

export let addToDo = createAction(CONSTANT.ADD_TODO, (val) => async (dispatch, getState) => {
    let v = await Promise.resolve('todo: ' + val);
    return v;
});

export let deleteToDo = createAction(CONSTANT.DELETE_TODO);
