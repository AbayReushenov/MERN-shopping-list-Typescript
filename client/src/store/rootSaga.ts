import { SagaIterator } from 'redux-saga';
import { all, call } from 'redux-saga/effects';
import { watchAuth } from './auth/watchers';
import { watchItems } from './items/watchers';

export function* rootSaga(): SagaIterator<void> {
  yield all([call(watchAuth), call(watchItems)]);
}
