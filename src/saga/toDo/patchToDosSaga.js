import { call, takeLatest, put } from 'redux-saga/effects';

import { patchDoneToDos } from '../../helpers/dbHelper';

import { toDoStartFreeSelectedsSuccess } from '../../actions/toDo';
import { finishLoading } from '../../actions/ui';

import { toDoTypes } from '../../types/toDoTypes';

async function patchToDos( ids ) {
    await patchDoneToDos( ids );
}

function* patchToDosEffectSaga( { payload: ids } ) {
    try {
        yield call( patchToDos, ids );
        yield put( toDoStartFreeSelectedsSuccess( ids ) );
    } catch( err ) {
        console.log( err );
    } finally {
        yield put( finishLoading() );
    }
}

export function* patchToDosWatcherSaga() {
    yield takeLatest( toDoTypes.toDoStartFreeSelecteds, patchToDosEffectSaga );
}