import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { SagaIterator } from 'redux-saga';
import { apply, put, takeLatest } from 'redux-saga/effects';

import { api } from '../../../api';
import { actions as actionsError } from '../../error/error';
import { actions as actionsAuth } from '../auth';
import { Msg } from '../enumMsg';
import { baseConfig } from '../headers/baseConfig';

interface Payload {
  name: string;
  email: string;
  password: string;
}

export const signupUserAsync = createAction<Payload>('users/signupUserAsync');

function* signupUserWorker(action: PayloadAction<Payload>): SagaIterator<void> {
  try {
    const data = yield apply(api, api.users.signup, [
      action.payload,
      baseConfig,
    ]);
    yield put(actionsAuth.fillUser(data));
  } catch (error: any) {
    yield put(
      actionsError.returnErrors({
        msg: error.response.data,
        status: error.response.status,
        id: Msg.REGISTER_FAIL,
      })
    );
    yield put(actionsAuth.reset());
  }
}

export function* watchSignupUser(): SagaIterator<void> {
  yield takeLatest(signupUserAsync.type, signupUserWorker);
}
