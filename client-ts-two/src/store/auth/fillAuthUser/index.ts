import { createAction } from '@reduxjs/toolkit';
import { SagaIterator } from 'redux-saga';
import { apply, put, select, takeLatest } from 'redux-saga/effects';

import { api } from '../../../api';
import { actions as actionsError } from '../../error/error';
import { actions as actionsAuth } from '../auth';
import { selectToken } from '../selectors';
import { tokenConfig } from '../../headers/tokenConfig';

export const fillAuthUserAsync = createAction(
  'users/fillAuthUserAsync'
);

function* fillAuthUserWorker(): SagaIterator<void> {
  try {
    const token = yield select(selectToken);
    const user = yield apply(api, api.auth.get, [tokenConfig(token)]);
    yield put(actionsAuth.fillAuthUser(user));
  } catch (error: any) {
    yield put(
      actionsError.returnErrors({
        msg: error.response.data,
        status: error.response.status,
        id: null,
      })
    );
    yield put(actionsAuth.reset());
  }
}

export function* watchFillAuthUser(): SagaIterator<void> {
  yield takeLatest(
    fillAuthUserAsync.type,
    fillAuthUserWorker
  );
}
