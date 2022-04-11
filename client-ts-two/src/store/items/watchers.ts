import { SagaIterator } from 'redux-saga';
import { all, call } from 'redux-saga/effects';

import { watchGetItems } from './getItems';
import { watchAddItem } from './addItem';
import { watchDeleteItem } from './deleteItem';

export function* watchItems(): SagaIterator<void> {
  yield all([call(watchGetItems), call(watchAddItem), call(watchDeleteItem)]);
}
