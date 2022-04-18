import { SagaIterator } from 'redux-saga';
import { all, call } from 'redux-saga/effects';

import { watchLoadUser } from './loadUser';
import { watchLogin } from './login';
import { watchRegister } from './register';

export function* watchAuth(): SagaIterator<void> {
  yield all([
    call(watchLoadUser),
    call(watchLogin),
    call(watchRegister),
  ]);
}
