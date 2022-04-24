import { toDoTypes } from "../types/toDoTypes";

const initialState = {
    toDoList: [],
    selectedToDo: null,
    selectedToDos: [],
    sortingType: 0
};

export const toDoReducer = ( state = initialState, { type, payload } ) => {
    switch( type ) {
        case toDoTypes.toDoGetList:
            return {
                ...state,
            };
        
        case toDoTypes.toDoGetListSuccess:
            return {
                ...state,
                toDoList: ( payload ) ?  [ ...payload ] : [],
            }
        
        case toDoTypes.toDoAddNew:
            return {
                ...state
            };
        
        case toDoTypes.toDoAddNewSuccess:
            return {
                ...state,
                toDoList: [ payload, ...state.toDoList ]
            };
        
        case toDoTypes.toDoStartSelect:
            return {
                ...state,
                selectedToDo: payload
            };

        case toDoTypes.toDoStartUnselect:
            return {
                ...state,
                selectedToDo: null
            };

        case toDoTypes.toDoEditSelected:
            return {
                ...state
            };
        
        case toDoTypes.toDoEditSelectedSuccess:
            return {
                ...state,
                toDoList: state.toDoList.map( ( toDo ) => ( toDo.id === payload.id ) ? payload : toDo )
            };

        case toDoTypes.toDoStartSelectCheckbox:
            return {
                ...state,
                selectedToDos: [ payload, ...state.selectedToDos ]
            };

        case toDoTypes.toDoStartUnselectCheckbox:
            return {
                ...state,
                selectedToDos: state.selectedToDos.filter( ( id ) => ( id !== payload ) )
            };
        
        case toDoTypes.toDoStartFreeSelecteds:
            return {
                ...state
            };
        
        case toDoTypes.toDoStartFreeSelectedsSuccess:
            return {
                ...state,
                toDoList: state.toDoList.map( ( toDo ) => {
                    if ( payload.includes( toDo.id ) ) toDo.isDone = true;
                    return toDo;
                } ),
                selectedToDos: []
            };

        case toDoTypes.toDoStartDeleteSelecteds:
            return {
                ...state
            };
        
        case toDoTypes.toDoStartDeleteSelectedsSuccess:
            return {
                ...state,
                toDoList: state.toDoList.filter( ( toDo ) => !payload.includes( toDo.id ) ),
                selectedToDos: []
            };
        
        case toDoTypes.toDoChangeSortingType: 
            return {
                ...state,
                sortingType: payload
            };

        default: 
            return state;
    }
}