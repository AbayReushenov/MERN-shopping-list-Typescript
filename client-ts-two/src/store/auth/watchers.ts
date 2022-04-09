import { SagaIterator } from 'redux-saga';
import { all, call } from 'redux-saga/effects';

import { watchFillAuthUser } from './fillAuthUser';
import { watchLoginUser } from './loginUser';
import { watchSignupUser } from './signupUser';

export function* watchAuth(): SagaIterator<void> {
  yield all([
    call(watchFillAuthUser),
    call(watchLoginUser),
    call(watchSignupUser),
  ]);
}
