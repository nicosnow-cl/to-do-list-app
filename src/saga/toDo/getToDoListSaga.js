import { call, takeLatest, put } from 'redux-saga/effects';

import { getToDos } from '../../helpers/dbHelper';
import { toDoGetListSuccess } from '../../actions/toDo';
import { finishLoading } from '../../actions/ui';
import { toDoTypes } from '../../types/toDoTypes';

async function getToDoList () {
    return await getToDos();
} 

function* getToDoListEffectSaga () {
    try { 
        const toDoList = yield call( getToDoList );
        yield put( toDoGetListSuccess( toDoList ) );
        yield put( finishLoading() );
    } catch( err ) {
        console.log( err );
    }
}

export function* getToDoListWatcherSaga () {
    yield takeLatest( toDoTypes.toDoGetList, getToDoListEffectSaga );
}