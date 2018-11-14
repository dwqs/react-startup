import { createAction } from 'redux-actions'

import api from '@src/network/api'
import * as CONSTANT from '../types'

export const addToDo = createAction(CONSTANT.ADD_TODO, (val) => async (dispatch, getState) => {
  await api.getIndex()
  const v = await Promise.resolve('todo: ' + val)
  return v
})

export const deleteToDo = createAction(CONSTANT.DELETE_TODO)
