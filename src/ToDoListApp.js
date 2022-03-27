import { useEffect, useState } from "react";

import { Box, Card, LinearProgress } from "@mui/material";

import { ToDoTitle } from "./components/to-do-title/ToDoTitle";
import { ToDoGrid } from "./components/to-do-grid/ToDoGrid";
import { AddToDo } from "./components/add-to-do/AddToDo";
import { AddToDoDialog } from "./components/add-to-do-dialog/AddToDoDialog";
import { EditToDoDialog } from "./components/edit-to-do-dialog/EditToDoDialog";

import { getCurrentDate } from "./helpers/dateHelper";

import { useGetFetchToDos } from "./hooks/useFetchToDos";

import './ToDoListApp.css';
import { Filters } from "./components/filters/Filters";

export const ToDoListApp = () => {
    const [ state, setState ] = useState( {
        todayDate: getCurrentDate( '/' ),
        toDos: [],
        loading: true,
        newToDo: {
            id: null,
            creationDate: null,
            dueDate: null,
            description: '',
            isDone: false
        },
        editToDo: {
            id: null,
            creationDate: null,
            dueDate: null,
            description: '',
            isDone: false
        }
    } );
    
    const { toDosData, setToDosData } = useGetFetchToDos();      
    useEffect( () => {
        setState( {
            ...state,
            toDos: toDosData.data,
            loading: toDosData.loading
        } );
    }, [ toDosData ] );
    
    const handleChange = () => {
        console.log( 'reordenar' );
    }

    const [ addDialogState, setAddDialogState ] = useState( false );
    const [ editDialogState, setEditDialogState ] = useState( false );

    const handleAddDialogOpen = () => {
        setAddDialogState( true );
    };

    const handleEditDialogOpen = () => {
        setEditDialogState( true );
    };

    const handleAddDialogClose = () => {
        setAddDialogState( false );
    };

    const handleEditDialogClose = () => {
        setEditDialogState( false );
    };

    return (
        <Box className="container">
            <ToDoTitle todayDate={ state.todayDate } />
            <hr />
            <br />

            <Filters handleChange={ handleChange } />

            {
                ( state.loading ) ? 
                <Box>
                    <Card>
                        <LinearProgress color="success" />
                    </Card>
                </Box>  : <ToDoGrid toDos={ state.toDos } todayDate={ state.todayDate } handleEditDialogOpen={ handleEditDialogOpen } />
            }
            
            <AddToDo handleClickOpen={ handleAddDialogOpen } />

            <AddToDoDialog dialogState={ addDialogState } handleClose={ handleAddDialogClose } />
            <EditToDoDialog dialogState={ editDialogState } handleClose={ handleEditDialogClose } />
        </Box>
    );
}
