import { uiTypes } from "../types/uiTypes";

export const startLoading = () => ( {
    type: uiTypes.uiStartLoading,
    payload: null
} )

export const finishLoading = () => ( {
    type: uiTypes.uiFinishLoading,
    payload: null
} )

export const addDialogIsOpen = () => ( {
    type: uiTypes.uiAddDialogOpen,
    payload: null
} )

export const addDialogIsClose = () => ( {
    type: uiTypes.uiAddDialogClose,
    payload: null
} )

export const editDialogIsOpen = () => ( {
    type: uiTypes.uiEditDialogOpen,
    payload: null
} )

export const editDialogIsClose = () => ( {
    type: uiTypes.uiEditDialogClose,
    payload: null
} )