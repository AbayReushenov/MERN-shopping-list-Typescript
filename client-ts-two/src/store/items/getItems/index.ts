import { createAction } from '@reduxjs/toolkit';
import { SagaIterator } from 'redux-saga';
import { apply, put, takeLatest } from 'redux-saga/effects';

import { api } from '../../../api';
import { actions as actionsError } from '../../error/error';
import { actions as actionsItems } from '../items';

export const getItemsAsync = createAction('items/getItemsAsync');

function* getItemsWorker(): SagaIterator<void> {
  try {
    const items = yield apply(api, api.items.get, []);
    yield put(actionsItems.fillItems(items));
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

export function* watchGetItems(): SagaIterator<void> {
  yield takeLatest(getItemsAsync.type, getItemsWorker);
}
