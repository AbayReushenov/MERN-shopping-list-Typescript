import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { SagaIterator } from 'redux-saga';
import { apply, call, put, select, takeLatest } from 'redux-saga/effects';

import { api } from '../../../api';
import { actions as actionsError } from '../../error/error';
import { actions as actionsItems } from '../items';
import { tokenConfig } from '../../headers/tokenConfig';
import { selectToken } from 'store/auth/selectors';

interface Payload {
  name: string;
}
let count = 0;
export const addItemAsync = createAction<Payload>('items/addItem');
console.log('1 уровень', count);
function* addItemWorker(action: PayloadAction<Payload>): SagaIterator<void> {
  const token = yield select(selectToken);
  count++;
  console.log('2 уровень', count);
  if (count < 3) {
    try {
      console.log('3 уровень', count);
      const item = yield apply(api, api.items.add, [
        action.payload,
        tokenConfig(token),
      ]);
      yield put(actionsItems.addItem(item));
    } catch (error: any) {
      yield put(
        actionsError.returnErrors({
          msg: error.response.data,
          status: error.response.status,
          id: null,
        })
      );
    }
  }
  console.log('4-уровень', count);
}

export function* watchAddItem(): SagaIterator<void> {
  console.log('Watcher - 0', count);
  yield takeLatest(addItemAsync.type, addItemWorker);
  console.log('Watcher - 0', count);
}
