import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { SagaIterator } from 'redux-saga';
import { apply, put, takeLatest } from 'redux-saga/effects';

import { api } from '../../../api';
import { actions as actionsError } from '../../error/error';
import { actions } from '../authSlice';
import { baseConfig } from '../../headers/baseConfig';
import { E_ERROR } from '../../../types/enum';

interface Payload {
  email: string;
  password: string;
}

export const login = createAction<Payload>('auth/login');

function* loginWorker(action: PayloadAction<Payload>): SagaIterator<void> {
  try {
    const data = yield apply(api, api.auth.login, [
      action.payload,
      baseConfig,
    ]);
    yield put(actions.fillUser(data));
  } catch (error: any) {
    yield put(
      actionsError.returnErrors({
        msg: error.response.data,
        status: error.response.status,
        id: E_ERROR.LOGIN_FAIL,
      })
    );
    yield put(actions.reset());
  }
}

export function* watchLogin(): SagaIterator<void> {
  yield takeLatest(login.type, loginWorker);
}
