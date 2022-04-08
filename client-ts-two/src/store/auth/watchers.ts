import { SagaIterator } from 'redux-saga';
import { all, call } from 'redux-saga/effects';

import { watchFillUserAuthintificated } from './fillUserAuthintificated';
import { watchSignupUser } from './signupUser';

export function* watchAuth(): SagaIterator<void> {
  yield all([call(watchFillUserAuthintificated), call(watchSignupUser)]);
}
