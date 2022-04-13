import { SagaIterator } from 'redux-saga';
import { all, call } from 'redux-saga/effects';

import { watchLoadUser } from './loadUser';
import { watchLoginUser } from './loginUser';
import { watchSignupUser } from './signupUser';

export function* watchAuth(): SagaIterator<void> {
  yield all([
    call(watchLoadUser),
    call(watchLoginUser),
    call(watchSignupUser),
  ]);
}
