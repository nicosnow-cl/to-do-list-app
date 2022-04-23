import { call, takeLatest, put } from 'redux-saga/effects';

import { putToDo } from '../../helpers/dbHelper';

import { toDoEditSelectedSuccess } from '../../actions/toDo';
import { finishLoading } from '../../actions/ui';

import { toDoTypes } from '../../types/toDoTypes';

async function putEditToDo( toDo ) {
    const _toDo = await putToDo( toDo );

    return _toDo;
}

function* puToDoEffectSaga( { payload: toDo } ) {
    try {;
        const _toDo = yield call( putEditToDo, toDo );
        yield put( toDoEditSelectedSuccess( _toDo ) );
    } catch ( err ) {
        console.log( err );
    } finally {
        yield put( finishLoading() );
    }
}

export function* putToDoWatcherSaga() {
    yield takeLatest( toDoTypes.toDoEditSelected, puToDoEffectSaga );
}