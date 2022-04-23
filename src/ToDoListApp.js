import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box, Card, LinearProgress } from "@mui/material";

import { ToDoTitle } from "./components/to-do-title/ToDoTitle";
import { Filters } from "./components/filters/Filters";
import { ToDoGrid } from "./components/to-do-grid/ToDoGrid";
import { AddToDo } from "./components/add-to-do/AddToDo";
import { AddToDoDialog } from "./components/add-to-do-dialog/AddToDoDialog";
import { EditToDoDialog } from "./components/edit-to-do-dialog/EditToDoDialog";

import { getCurrentDate } from "./helpers/dateHelper";
import { getSortedToDos } from "./helpers/sortsHelper";

import './ToDoListApp.css';

import { toDoGetList } from "./actions/toDo";

export const ToDoListApp = () => {
    const dispatch = useDispatch();

    // @ts-ignore
    const { loading, todayDate } = useSelector( ( state ) => state.ui );
    
    useEffect( () => {
      dispatch( toDoGetList() );
    }, [ dispatch ] );
    
    return (
        <Box className="container">
            <ToDoTitle todayDate={ todayDate } />
            <hr />
            <br />
 
            <Filters />
            
            {
                ( loading ) 
                ?   <Box>
                        <Card>
                            <LinearProgress color="success" />
                        </Card>
                    </Box>  
                :   <ToDoGrid />
            }
            
            <AddToDo />
            
            <AddToDoDialog />
            <EditToDoDialog />
        </Box>
    );
}
