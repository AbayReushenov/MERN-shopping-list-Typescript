import { createAction } from '@reduxjs/toolkit';
import { SagaIterator } from 'redux-saga';
import { apply, put, select, takeLatest } from 'redux-saga/effects';

import { api } from '../../../api';
import { actions as fetch } from '../../fetch/slice';
import { actions as actionsAuth } from '../auth';
import { selectToken } from '../selectors';
import { tokenConfig } from './tokenConfig';

export const fillUserAuthintificatedAsync = createAction('users/fillUserAuthintificatedAsync');

function* fillUserAuthintificatedWorker(): SagaIterator<void> {
  try {
    const token = yield select(selectToken)
    const user = yield apply(api, api.user.auth, [tokenConfig(token)]);
    yield put(actionsAuth.fillUserAuthintificated(user));
  } catch (error) {
    yield put(actionsAuth.reset());
    if (error instanceof Error) {
      yield put(fetch.setError(error));
    }
  }
}

export function* watchFillUserAuthintificated(): SagaIterator<void> {
  yield takeLatest(fillUserAuthintificatedAsync.type, fillUserAuthintificatedWorker);
}
