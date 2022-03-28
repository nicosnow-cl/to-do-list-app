import { useEffect, useState } from "react";

import { Box, Card, LinearProgress } from "@mui/material";

import { ToDoTitle } from "./components/to-do-title/ToDoTitle";
import { Filters } from "./components/filters/Filters";
import { ToDoGrid } from "./components/to-do-grid/ToDoGrid";
import { AddToDo } from "./components/add-to-do/AddToDo";
import { AddToDoDialog } from "./components/add-to-do-dialog/AddToDoDialog";
import { EditToDoDialog } from "./components/edit-to-do-dialog/EditToDoDialog";

import { useGetFetchToDos } from "./hooks/useFetchToDos";

import { getCurrentDate } from "./helpers/dateHelper";
import { getSortedToDos } from "./helpers/sortsHelper";

import './ToDoListApp.css';
import { deleteToDos, patchDoneToDos } from "./helpers/dbHelper";

export const ToDoListApp = () => {
    const [ state, setState ] = useState( {
        todayDate: getCurrentDate( '/' ),
        toDos: [],
        filteredToDos: [],
        loading: true,
        reload: false,
        selected: [],
        
    } );
    const [ reload, setReload ] = useState( false );
    const [ addDialogState, setAddDialogState ] = useState( false );
    const [ editDialogState, setEditDialogState ] = useState( {
        dialogState: false,
        editToDo: {
            id: null,
            creationDate: null,
            dueDate: null,
            description: '',
            isDone: false
        }
    } );

    const { toDosData, setToDosData } = useGetFetchToDos( reload );      
    useEffect( () => {
        setState( {
            ...state,
            toDos: toDosData.data,
            loading: toDosData.loading
        } );
    }, [ toDosData ] );
    
    const handleChange = ( type ) => {
        const sortedToDos = getSortedToDos( state.toDos, type );

        setState( {
            ...state,
            toDos: sortedToDos,
            filteredToDos: sortedToDos 
        } );
    }

    const handleSelected = ( id, isChecked ) => {
        let selecteds = ( isChecked ) ? [ ...state.selected, id ] : [ ...state.selected.filter( ( selected ) => selected !== id ) ];
        
        setState( {
            ...state,
            selected: selecteds
        } );
    }

    const handleFreeSelected = () => {
        patchDoneToDos( state.selected ).then( () => {
            setState( {
                ...state,
                selected: []
            } );

            setReload( ( c ) => !c );
        } )
    }

    const handleDeleteSelected = () => {
        deleteToDos( state.selected ).then( () => {
            setState( {
                ...state,
                selected: []
            } );

            setReload( ( c ) => !c );
        } );
    }

    const handleAddDialogOpen = () => {
        setAddDialogState( true );
    };

    const handleEditDialogOpen = ( id ) => {
        const toDo = state.toDos.find( ( toDo ) => toDo.id === id );

        setEditDialogState( {
            dialogState: true,
            editToDo: toDo,
        } );
    };

    const handleAddDialogClose = () => {
        setAddDialogState( false );
    };

    const handleEditDialogClose = () => {
        setEditDialogState( {
            dialogState: false,
            editToDo: {
                id: null,
                creationDate: null,
                dueDate: null,
                description: '',
                isDone: false
            }
        } );
    };

    return (
        <Box className="container">
            <ToDoTitle todayDate={ state.todayDate } />
            <hr />
            <br />

            <Filters handleChange={ handleChange } handleFreeSelected={ handleFreeSelected } handleDeleteSelected={ handleDeleteSelected } selected={ state.selected } />

            {
                ( state.loading ) ? 
                <Box>
                    <Card>
                        <LinearProgress color="success" />
                    </Card>
                </Box>  : <ToDoGrid toDos={ state.toDos } todayDate={ state.todayDate } handleEditDialogOpen={ handleEditDialogOpen } handleSelected={ handleSelected } />
            }
            
            <AddToDo handleClickOpen={ handleAddDialogOpen } />

            <AddToDoDialog setReload={ setReload } dialogState={ addDialogState } handleClose={ handleAddDialogClose } />

            {

                ( editDialogState.editToDo.id ) && <EditToDoDialog setReload={ setReload } editDialogState={ editDialogState } handleClose={ handleEditDialogClose } />
            }
        </Box>
    );
}
