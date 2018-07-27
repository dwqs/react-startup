import { createAction } from 'redux-actions';

import * as CONSTANT from '../types';

export let getCurTime = createAction(CONSTANT.CURRENT_TIME, (time) => Date.now());
