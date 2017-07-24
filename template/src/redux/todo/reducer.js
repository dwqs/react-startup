/**
 * Created by pomy on 23/07/2017.
 */

import { handleActions } from 'redux-actions';
import * as CONSTANT from '../types';

export default handleActions({
    [CONSTANT.ADD_TODO]: {
        next(state, action) {
            // async action success
            console.log('async action success', action)
            return Object.assign({}, state, {
                list: [].concat(state.list, action.payload)
            })
        },
        throw(state, action) {
            // async action error
            console.log('async action error', action)
            return Object.assign({}, state);
        }
    },
    [CONSTANT.DELETE_TODO]: (state, action) => {
        let list = state.list;
        list.splice(action.payload, 1);
        return Object.assign({}, state, {
            list: list
        })
    }
}, {
    list: []
})
