/**
 * Created by pomy on 23/07/2017.
 */

import { handleActions } from 'redux-actions';
import * as CONSTANT from '../types';

export default handleActions({
    [CONSTANT.CURRENT_TIME]: (state, action) => {
        return Object.assign({}, state, {
            curTime: action.payload
        })
    }
}, {
    curTime: Date.now()
})
