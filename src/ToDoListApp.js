import { useState } from "react";

import { Box} from "@mui/material";

import { ToDoTitle } from "./components/to-do-title/ToDoTitle";
import { ToDoGrid } from "./components/to-do-grid/ToDoGrid";
import { AddToDo } from "./components/add-to-do/AddToDo";
import { AddToDoDialog } from "./components/add-to-do-dialog/AddToDoDialog";
import { EditToDoDialog } from "./components/edit-to-do-dialog/EditToDoDialog";

import { getCurrentDate } from "./helpers/dateHelper";

import { useFetch } from "./hooks/useFetch";

import './ToDoListApp.css';
import { Filters } from "./components/filters/Filters";

export const ToDoListApp = () => {
    const todayDate = getCurrentDate( '/' );
    let yesterdayDate = new Date();
    yesterdayDate.setDate( todayDate.date.getDate() -1 );
    const { getToDos } = useFetch();

    const toDos = getToDos();

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
        <ToDoTitle todayDate={ todayDate } />
        <hr />
        <br />
        
        <Filters handleChange={ handleChange } />

        <ToDoGrid toDos={ toDos } todayDate={ todayDate } handleEditDialogOpen={ handleEditDialogOpen } />

        <AddToDo handleClickOpen={ handleAddDialogOpen } />

        <AddToDoDialog dialogState={ addDialogState } handleClose={ handleAddDialogClose } />
        <EditToDoDialog dialogState={ editDialogState } handleClose={ handleEditDialogClose } />
    </Box>
  );
}
