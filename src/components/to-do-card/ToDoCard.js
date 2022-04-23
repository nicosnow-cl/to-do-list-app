import { useDispatch, useSelector } from "react-redux";

import { Button, Card, Checkbox, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import { editDialogIsOpen } from "../../actions/ui";

import { isFirstDateMoreThanSecondDate, parseDate } from "../../helpers/dateHelper";

import './ToDoCard.css';
import { toDoStartSelect, toDoStartSelectCheckbox, toDoStartUnselectCheckbox } from "../../actions/toDo";
import { useEffect, useState } from "react";

export const ToDoCard = ( { 
    id,
    creationDate,
    dueDate,
    description,
    isDone
} ) => {
    const dispatch = useDispatch();

    // @ts-ignore
    const { todayDate } = useSelector( ( state ) => state.ui );
    // @ts-ignore
    const { selectedToDos } = useSelector( ( state ) => state.toDo );

    const creationDateParsed = new Date( creationDate );
    const dueDateParsed = new Date( dueDate );

    const creationDateStr = parseDate( creationDateParsed, '/' );
    const dueDateStr = parseDate( dueDateParsed, '/' );

    const statusIcon = <FontAwesomeIcon icon={ 
            ( isDone ) ? faCircleCheck : ( isFirstDateMoreThanSecondDate( creationDateParsed, todayDate.date ) ) ? faClock : faCircleXmark
        } size="3x" className={
            ( isDone ) ? 'status-done' : ( isFirstDateMoreThanSecondDate( dueDateParsed, todayDate.date ) ) ? 'status-on-time' : 'status-late'
        }     
    />;

    const handleOpenEditModal = ( evt ) => {
        evt.preventDefault();

        const toDo = {
            id,
            creationDate,
            dueDate,
            description,
            isDone
        };

        dispatch( toDoStartSelect( toDo ) );
        dispatch( editDialogIsOpen() );
    }

    const handleToggleCheckbox = ( evt ) => {
        const isChecked = evt.target.checked;

        if ( isChecked ) dispatch( toDoStartSelectCheckbox( id ) );
        else dispatch( toDoStartUnselectCheckbox( id ) );
    }

    return (
        <Card variant="outlined" sx={ { p: 3, mb: 2 } } className={ ( isDone ) ? 'card-done' : ( isFirstDateMoreThanSecondDate( dueDateParsed, todayDate.date ) ) ? 'card-on-time' : 'card-late' }> 

            <Box sx={ { display: 'flex', justifyContent: 'space-between' } }>
                <Box sx={ { display: 'flex', justifyContent: 'flex-start' } }>                    
                    <Checkbox 
                        onChange={ handleToggleCheckbox } 
                        checked={ selectedToDos.includes( id ) ? true : false }
                    /> 

                    <p>
                        { description }
                    </p>
                </Box>
                
                <Box sx={ { display: 'flex', justifyContent: 'flex-end' } }>
                    <Box sx={ { display: 'flex', alignItems: 'center' } }>
                        <TextField id="standard-basic" label="Fecha de creación" value={ creationDateStr } variant="standard" disabled sx={ { mr: 4 } } />
                        <TextField id="standard-basic" label="Fecha de vencimiento" value={ dueDateStr } variant="standard" disabled sx={ { mr: 4 } } />
                        <FontAwesomeIcon icon={ faCalendarDays } size="2x" className="mr-4" />
                    </Box>

                    {
                        statusIcon
                    }

                    {
                        ( !isDone ) && <Button sx={ { ml: 2 } } onClick={ handleOpenEditModal } >
                            Editar
                        </Button>
                    }
                    
                </Box>
            </Box>
            
    
        </Card>
    );
}
