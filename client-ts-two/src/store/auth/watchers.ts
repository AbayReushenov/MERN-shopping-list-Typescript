import { SagaIterator } from "redux-saga";
import { all, call } from "redux-saga/effects";

import { watchFillUserAuthintificated } from './fillUserAuthintificated';

export function* watchAuth(): SagaIterator<void> {
    yield all([
        call(watchFillUserAuthintificated)
    ]);
}
