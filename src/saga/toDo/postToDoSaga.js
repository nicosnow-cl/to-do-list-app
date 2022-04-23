import { call, takeLatest, put } from 'redux-saga/effects';

import { postToDo } from '../../helpers/dbHelper';

import { toDoAddNewSuccess } from '../../actions/toDo';
import { finishLoading } from '../../actions/ui';

import { toDoTypes } from '../../types/toDoTypes';

async function postNewToDo ( toDo ) {
    const _toDo = await postToDo( toDo );

    return _toDo;
}

function* postToDoEffectSaga ( { payload: toDo } ) {
    try {
        const _toDo = yield call( postNewToDo, toDo );
        yield put( toDoAddNewSuccess( _toDo ) );
    } catch ( err ) {
        console.log( err );
    } finally {
        yield put( finishLoading() );
    }
}

export function* postToDoWatcherSaga () {
    yield takeLatest( toDoTypes.toDoAddNew, postToDoEffectSaga );
}