import { all } from 'redux-saga/effects';

import { getToDoListWatcherSaga } from './toDo/getToDoListSaga';
import { patchToDosWatcherSaga } from './toDo/patchToDosSaga';
import { postToDoWatcherSaga } from './toDo/postToDoSaga';
import { putToDoWatcherSaga } from './toDo/putToDoSaga';

export default function* rootSaga() {
    yield all( [
        getToDoListWatcherSaga(),
        postToDoWatcherSaga(),
        putToDoWatcherSaga(),
        patchToDosWatcherSaga()
    ] );
}