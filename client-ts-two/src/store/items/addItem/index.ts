import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { SagaIterator } from 'redux-saga';
import { apply, put, select, takeLatest } from 'redux-saga/effects';

import { api } from '../../../api';
import { actions as actionsError } from '../../error/error';
import { actions as actionsItems } from '../items';
import { tokenConfig } from '../../headers/tokenConfig';
import { selectToken } from 'store/auth/selectors';

interface Payload {
  name: string;
}

export const addItemAsync = createAction<Payload>('items/addItem');

function* addItemWorker(action: PayloadAction<Payload>): SagaIterator<void> {
  try {
    const token = yield select(selectToken);
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

export function* watchAddItem(): SagaIterator<void> {
  yield takeLatest(addItemAsync.type, addItemWorker);
}
