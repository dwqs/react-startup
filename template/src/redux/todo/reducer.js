/**
 * Created by pomy on 23/07/2017.
 */

import { handleActions } from 'redux-actions';
import * as CONSTANT from '../types';

export default handleActions({
    [CONSTANT.ADD_TODO]: {
        next(state, action) {
            // async action success
        },
        throw(state, action) {
            // async action error
        }
    },
    [CONSTANT.DELETE_TODO]: {
        next(state, action) {
            // async action success
        },
        throw(state, action) {
            // async action error
        }
    }
}, {
    list: []
})
