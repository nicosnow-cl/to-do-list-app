import { call, takeLatest, put } from 'redux-saga/effects';

import { deleteToDos } from '../../helpers/dbHelper';

import { finishLoading } from '../../actions/ui';

import { toDoTypes } from '../../types/toDoTypes';
import { toDoStartDeleteSelectedsSuccess } from '../../actions/toDo';

async function deleteEraseToDos( ids ) {
    await deleteToDos( ids );
}

function* deleteToDosEffectSaga( { payload: ids } ) {
    try {
        yield call( deleteEraseToDos, ids );
        yield put( toDoStartDeleteSelectedsSuccess( ids ) );
    } catch ( err ) {
        console.log( err );
    } finally {
        yield put( finishLoading() )
    }
}

export function* deleteToDosWatcherSaga() {
    yield takeLatest( toDoTypes.toDoStartDeleteSelecteds, deleteToDosEffectSaga );
}