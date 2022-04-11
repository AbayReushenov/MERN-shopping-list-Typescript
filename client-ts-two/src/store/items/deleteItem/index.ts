import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { SagaIterator } from 'redux-saga';
import { apply, put, takeLatest } from 'redux-saga/effects';

import { api } from '../../../api';
import { actions as actionsError } from '../../error/error';
import { actions as actionsItems } from '../items';
import { baseConfig } from '../headers/baseConfig';

interface Payload {
  _id: string;
}

export const deleteItemAsync = createAction<Payload>('items/deleteItem');

function* deleteItemWorker(action: PayloadAction<Payload>): SagaIterator<void> {
  try {
    yield apply(api, api.items.delete, [
      action.payload,
      baseConfig
    ]);
    yield put(actionsItems.deleteItem(action.payload));
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

export function* watchDeleteItem(): SagaIterator<void> {
  yield takeLatest(deleteItemAsync.type, deleteItemWorker);
}
