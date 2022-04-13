import { createAction } from '@reduxjs/toolkit';
import { SagaIterator } from 'redux-saga';
import { apply, put, select, takeLatest } from 'redux-saga/effects';

import { api } from '../../../api';
import { actions as actionsError } from '../../error/error';
import { actions as actionsAuth } from '../authSlice';
import { selectToken } from '../selectors';
import { tokenConfig } from '../../headers/tokenConfig';

export const loadUser = createAction('auth/loadUser');

function* loadUserWorker(): SagaIterator<void> {
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

export function* watchLoadUser(): SagaIterator<void> {
  yield takeLatest(loadUser.type, loadUserWorker);
}
