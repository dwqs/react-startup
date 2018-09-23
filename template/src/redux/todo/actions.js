import { createAction } from 'redux-actions'

import api from '@src/network/api'
import * as CONSTANT from '../types'

export let addToDo = createAction(CONSTANT.ADD_TODO, (val) => async (dispatch, getState) => {
  await api.getIndex();
  let v = await Promise.resolve('todo: ' + val)
  return v
})

export let deleteToDo = createAction(CONSTANT.DELETE_TODO)
