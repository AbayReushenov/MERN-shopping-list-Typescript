import { SagaIterator } from 'redux-saga';
import { all, call } from 'redux-saga/effects';
import { watchAuth } from './auth/watchers';

export function* rootSaga(): SagaIterator<void> {
  yield all([call(watchAuth)]);
}
