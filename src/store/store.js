import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga'

import { toDoReducer } from '../reducers/toDoReducer';
import { uiReducer } from "../reducers/uiReducer";

import rootSaga from "../saga/root.saga";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers( {
    ui: uiReducer,
    toDo: toDoReducer
} );

// @ts-ignore
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore( 
    reducers,
    composeEnhancers( applyMiddleware( sagaMiddleware ) )
);

sagaMiddleware.run( rootSaga );

export default store;