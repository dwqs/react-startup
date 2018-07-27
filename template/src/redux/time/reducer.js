import { handleActions } from '../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/redux-actions';
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
