import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { SagaIterator } from 'redux-saga';
import { apply, put, takeLatest } from 'redux-saga/effects';

import { api } from '../../../api';
import { actions as actionsError } from '../../error/error';
import { actions as actionsItems } from '../items';
import { baseConfig } from '../headers/baseConfig';

interface Payload {
  name: string;
}

export const addItemAsync = createAction<Payload>('items/addItem');

function* addItemWorker(action: PayloadAction<Payload>): SagaIterator<void> {
  try {
    const item = yield apply(api, api.items.add, [
      action.payload,
      baseConfig
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
