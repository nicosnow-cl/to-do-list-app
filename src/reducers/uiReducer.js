import { getCurrentDate } from "../helpers/dateHelper";
import { uiTypes } from "../types/uiTypes";

const initialState = {
    loading: true,
    todayDate: getCurrentDate( '/' ),
    addDialogIsOpen: false,
    editDialogIsOpen: false
};

export const uiReducer = ( state = initialState, { type, payload } ) => {   
    switch( type ) {
        case uiTypes.uiStartLoading:
            return {
                ...state,
                loading: true
            };
        
        case uiTypes.uiFinishLoading:
            return {
                ...state,
                loading: false
            };

        case uiTypes.uiAddDialogOpen:
            return {
                ...state,
                addDialogIsOpen: true
            };
        
        case uiTypes.uiAddDialogClose:
            return {
                ...state,
                addDialogIsOpen: false
            };

        case uiTypes.uiEditDialogOpen:
            return {
                ...state,
                editDialogIsOpen: true
            };

        case uiTypes.uiEditDialogClose:
            return {
                ...state,
                editDialogIsOpen: false
            };

        default:
            return state;
    };
}