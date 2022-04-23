import { toDoTypes } from "../types/toDoTypes";

export const toDoGetList = () => ( {
    type: toDoTypes.toDoGetList,
    payload: null
} )

export const toDoGetListSuccess = ( toDoList ) => ( {
    type: toDoTypes.toDoGetListSuccess,
    payload: toDoList
} )

export const toDoAddNew = ( toDo ) => ( {
    type: toDoTypes.toDoAddNew,
    payload: toDo
} )

export const toDoAddNewSuccess = ( toDo ) => ( {
    type: toDoTypes.toDoAddNewSuccess,
    payload: toDo
} )

export const toDoStartSelect = ( toDo ) => ( {
    type: toDoTypes.toDoStartSelect,
    payload: toDo
} )

export const toDoStartUnselect = () => ( {
    type: toDoTypes.toDoStartUnselect,
    payload: null
} )

export const toDoStartEditSelected = ( toDo ) => ( {
    type: toDoTypes.toDoEditSelected,
    payload: toDo
} )

export const toDoEditSelectedSuccess = ( toDo ) => ( {
    type: toDoTypes.toDoEditSelectedSuccess,
    payload: toDo
} )

export const toDoStartSelectCheckbox = ( id ) => ( {
    type: toDoTypes.toDoStartSelectCheckbox,
    payload: id
} )

export const toDoStartUnselectCheckbox = ( id ) => ( {
    type: toDoTypes.toDoStartUnselectCheckbox,
    payload: id
} )

export const toDoStartFreeSelecteds = ( ids ) => ( {
    type: toDoTypes.toDoStartFreeSelecteds,
    payload: ids
} )

export const toDoStartFreeSelectedsSuccess = ( ids ) => ( {
    type: toDoTypes.toDoStartFreeSelectedsSuccess,
    payload: ids
} )